import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ReactFlowProvider, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import ComponentPalette from './components/ComponentPalette';
import DesignCanvas from './components/DesignCanvas';
import Controls from './components/Controls';
import RequestLog from './components/RequestLog';
import TemplateSelector from './components/TemplateSelector';
import NodeConfigPanel from './components/NodeConfigPanel';
import AssessmentPanel from './components/AssessmentPanel';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const REQUEST_TYPES = [
  { id: 'generic', label: '📡 Generic Request', color: '#4CAF50' },
  { id: 'student', label: '🎓 Student Request', color: '#2196F3' },
  { id: 'employee', label: '👔 Employee Request', color: '#FF9800' },
  { id: 'admin', label: '🔑 Admin Request', color: '#E91E63' },
  { id: 'api', label: '⚡ API Call', color: '#9C27B0' },
  { id: 'webhook', label: '🔔 Webhook', color: '#00BCD4' },
];

function AppContent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [requests, setRequests] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const animationRef = useRef(null);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge({ ...params, animated: false, style: { stroke: '#555' } }, eds));
    },
    [setEdges]
  );

  const handleSelectTemplate = useCallback((template) => {
    setIsPlaying(false);
    setRequests([]);
    setSelectedNode(null);
    const clonedNodes = JSON.parse(JSON.stringify(template.nodes));
    const clonedEdges = JSON.parse(JSON.stringify(template.edges));
    setNodes(clonedNodes);
    setEdges(clonedEdges);
  }, [setNodes, setEdges]);

  const handleNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const handleUpdateNode = useCallback((nodeId, updates) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === nodeId ? { ...n, data: { ...n.data, ...updates } } : n
      )
    );
    setSelectedNode((prev) =>
      prev && prev.id === nodeId ? { ...prev, data: { ...prev.data, ...updates } } : prev
    );
  }, [setNodes]);

  const handleCloseConfig = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleDeleteNode = useCallback((nodeId) => {
    setNodes((prev) => prev.filter((n) => n.id !== nodeId));
    setEdges((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId));
    setSelectedNode((prev) => (prev && prev.id === nodeId ? null : prev));
  }, [setNodes, setEdges]);

  // Compute flow sequence numbers (skip group nodes)
  const flowOrderMap = (() => {
    if (nodes.length === 0 || edges.length === 0) return {};
    const incoming = new Map();
    const outgoing = new Map();
    edges.forEach((e) => {
      if (!incoming.has(e.target)) incoming.set(e.target, []);
      incoming.get(e.target).push(e.source);
      if (!outgoing.has(e.source)) outgoing.set(e.source, []);
      outgoing.get(e.source).push(e.target);
    });
    const starts = nodes.filter(
      (n) => n.type !== 'groupNode' && (!incoming.has(n.id) || incoming.get(n.id).length === 0)
    );
    if (starts.length === 0) return {};
    const order = {};
    const visited = new Set();
    const queue = [...starts.map((s) => s.id)];
    let seq = 1;
    while (queue.length > 0) {
      const id = queue.shift();
      if (visited.has(id)) continue;
      const nd = nodes.find((n) => n.id === id);
      if (nd && nd.type === 'groupNode') {
        visited.add(id);
        (outgoing.get(id) || []).forEach((t) => { if (!visited.has(t)) queue.push(t); });
        continue;
      }
      visited.add(id);
      order[id] = seq++;
      (outgoing.get(id) || []).forEach((t) => { if (!visited.has(t)) queue.push(t); });
    }
    return order;
  })();

  const nodesWithExtras = nodes.map((n) => ({
    ...n,
    data: {
      ...n.data,
      onDelete: () => handleDeleteNode(n.id),
      flowOrder: flowOrderMap[n.id] || null,
    },
  }));

  // Build path — skip group nodes so simulation flows through real components only
  const findRequestPath = useCallback(() => {
    if (nodes.length === 0) return { path: [], blocked: false };

    const incomingEdges = new Map();
    const outgoingEdges = new Map();

    edges.forEach((edge) => {
      if (!incomingEdges.has(edge.target)) incomingEdges.set(edge.target, []);
      incomingEdges.get(edge.target).push(edge.source);
      if (!outgoingEdges.has(edge.source)) outgoingEdges.set(edge.source, []);
      outgoingEdges.get(edge.source).push(edge.target);
    });

    // Only consider non-group nodes as start points
    const realNodes = nodes.filter((n) => n.type !== 'groupNode');
    const startNodes = realNodes.filter(
      (n) => !incomingEdges.has(n.id) || incomingEdges.get(n.id).length === 0
    );
    if (startNodes.length === 0) return { path: realNodes.length > 0 ? [realNodes[0].id] : [], blocked: false };

    const path = [];
    const visited = new Set();
    const queue = [startNodes[0].id];

    while (queue.length > 0) {
      const current = queue.shift();
      if (visited.has(current)) continue;
      visited.add(current);

      const currentNode = nodes.find((n) => n.id === current);
      // Skip group nodes in the path but still traverse their edges
      if (currentNode && currentNode.type === 'groupNode') {
        const neighbors = outgoingEdges.get(current) || [];
        neighbors.forEach((n) => { if (!visited.has(n)) queue.push(n); });
        continue;
      }

      path.push(current);

      let neighbors = outgoingEdges.get(current) || [];
      if (currentNode && currentNode.data.allowedRoutes) {
        const allowed = currentNode.data.allowedRoutes.split(',').map((s) => s.trim().toLowerCase());
        neighbors = neighbors.filter((nId) => {
          const nNode = nodes.find((n) => n.id === nId);
          return nNode && allowed.includes(nNode.data.label.toLowerCase());
        });
      }
      neighbors.forEach((n) => { if (!visited.has(n)) queue.push(n); });
    }

    return { path, blocked: false };
  }, [nodes, edges]);

  const addRequest = useCallback((reqType) => {
    const { path } = findRequestPath();
    if (path.length === 0) {
      alert('Add some components and connect them first!');
      return;
    }

    const typeInfo = REQUEST_TYPES.find((t) => t.id === reqType) || REQUEST_TYPES[0];
    const pathLabels = path.map((nodeId) => {
      const node = nodes.find((n) => n.id === nodeId);
      return node ? node.data.label : 'Unknown';
    });

    const newRequest = {
      id: uuidv4(),
      path,
      pathLabels,
      currentIndex: -1,
      status: 'pending',
      blockedAt: null,
      routeViolation: null,
      reqType: typeInfo.id,
      reqLabel: typeInfo.label,
      reqColor: typeInfo.color,
    };

    setRequests((prev) => [...prev, newRequest]);
  }, [findRequestPath, nodes]);

  // Animation loop with network rule enforcement
  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    animationRef.current = setInterval(() => {
      setRequests((prevRequests) => {
        const updated = prevRequests.map((req) => {
          if (req.status === 'completed' || req.status === 'blocked') return req;

          const nextIndex = req.currentIndex + 1;
          if (nextIndex >= req.path.length) {
            return { ...req, status: 'completed', currentIndex: req.path.length - 1 };
          }

          const nextNodeId = req.path[nextIndex];
          const nextNode = nodes.find((n) => n.id === nextNodeId);

          if (nextNode && nextNode.data.networkAllowed === false) {
            return { ...req, currentIndex: nextIndex, status: 'blocked', blockedAt: nextNode.data.label };
          }

          if (req.currentIndex >= 0) {
            const currentNodeId = req.path[req.currentIndex];
            const currentNode = nodes.find((n) => n.id === currentNodeId);
            if (currentNode && currentNode.data.allowedRoutes) {
              const allowed = currentNode.data.allowedRoutes.split(',').map((s) => s.trim().toLowerCase());
              if (nextNode && !allowed.includes(nextNode.data.label.toLowerCase())) {
                return {
                  ...req, currentIndex: nextIndex, status: 'blocked',
                  routeViolation: `${currentNode.data.label} → ${nextNode.data.label} not allowed`,
                };
              }
            }
          }

          return { ...req, currentIndex: nextIndex, status: 'active' };
        });

        const activeNodeIds = new Set();
        const blockedNodeIds = new Set();
        updated.forEach((req) => {
          if (req.currentIndex >= 0) {
            if (req.status === 'blocked') blockedNodeIds.add(req.path[req.currentIndex]);
            else if (req.status === 'active') activeNodeIds.add(req.path[req.currentIndex]);
          }
        });

        setNodes((prevNodes) =>
          prevNodes.map((node) => ({
            ...node,
            data: {
              ...node.data,
              isActive: activeNodeIds.has(node.id),
              status: blockedNodeIds.has(node.id) ? 'blocked' : undefined,
            },
          }))
        );

        setEdges((prevEdges) =>
          prevEdges.map((edge) => {
            let isActive = false;
            let isBlocked = false;
            updated.forEach((req) => {
              if (req.currentIndex <= 0) return;
              const prevNodeId = req.path[req.currentIndex - 1];
              const currNodeId = req.path[req.currentIndex];
              if (edge.source === prevNodeId && edge.target === currNodeId) {
                if (req.status === 'blocked') isBlocked = true;
                else if (req.status === 'active') isActive = true;
              }
            });
            const stroke = isBlocked ? '#f44336' : isActive ? '#00ff00' : '#555';
            const strokeWidth = isActive || isBlocked ? 3 : 1;
            return { ...edge, animated: isActive || isBlocked, style: { stroke, strokeWidth } };
          })
        );

        return updated;
      });
    }, speed);

    return () => { if (animationRef.current) clearInterval(animationRef.current); };
  }, [isPlaying, speed, nodes, setNodes, setEdges]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const handleReset = () => {
    setIsPlaying(false);
    setRequests([]);
    setNodes((prev) => prev.map((n) => ({ ...n, data: { ...n.data, isActive: false, status: undefined } })));
    setEdges((prev) => prev.map((e) => ({ ...e, animated: false, style: { stroke: '#555', strokeWidth: 1 } })));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>System Design Tool</h1>
        <TemplateSelector onSelectTemplate={handleSelectTemplate} />
        <Controls
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onReset={handleReset}
          onAddRequest={addRequest}
          requestCount={requests.length}
          speed={speed}
          onSpeedChange={setSpeed}
          requestTypes={REQUEST_TYPES}
        />
        <button className="assessment-btn" onClick={() => setShowAssessment(true)}>🎯 Assessment</button>
      </header>
      <div className="app-body">
        <ComponentPalette />
        <DesignCanvas
          nodes={nodesWithExtras}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
        />
        {selectedNode && (
          <NodeConfigPanel
            node={selectedNode}
            onUpdateNode={handleUpdateNode}
            onDeleteNode={handleDeleteNode}
            onClose={handleCloseConfig}
          />
        )}
        <RequestLog requests={requests} nodes={nodes} />
      </div>
      {showAssessment && (
        <AssessmentPanel nodes={nodes} onClose={() => setShowAssessment(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <ReactFlowProvider>
      <AppContent />
    </ReactFlowProvider>
  );
}

export default App;
