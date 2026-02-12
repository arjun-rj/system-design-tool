import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls as FlowControls,
  MiniMap,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import SystemNode from './SystemNode';
import GroupNode from './GroupNode';
import groupTypes from './groupTypes';
import { v4 as uuidv4 } from 'uuid';

const nodeTypes = { systemNode: SystemNode, groupNode: GroupNode };

function DesignCanvas({ nodes, edges, onNodesChange, onEdgesChange, onConnect, onNodeClick }) {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData('application/json');
      if (!data) return;

      const component = JSON.parse(data);
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const isGroup = groupTypes.has(component.type);

      const newNode = {
        id: uuidv4(),
        type: isGroup ? 'groupNode' : 'systemNode',
        position,
        data: {
          label: component.label,
          type: component.type,
          icon: component.icon,
          color: component.color,
          isActive: false,
          networkAllowed: true,
          ...(isGroup ? { width: 500, height: 300 } : {}),
        },
        ...(isGroup ? { style: { width: 500, height: 300 }, zIndex: -1 } : {}),
      };

      onNodesChange([{ type: 'add', item: newNode }]);
    },
    [screenToFlowPosition, onNodesChange]
  );

  return (
    <div className="design-canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
        fitView
        deleteKeyCode={['Backspace', 'Delete']}
      >
        <Background color="#aaa" gap={16} />
        <FlowControls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default DesignCanvas;
