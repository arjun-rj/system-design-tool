import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import descriptions from './descriptions';

function SystemNode({ data, selected }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const desc = descriptions[data.type] || 'System component';
  const isBlocked = data.networkAllowed === false;

  const handleDelete = (e) => {
    e.stopPropagation();
    if (data.onDelete) data.onDelete();
  };

  return (
    <div
      className={`system-node ${data.isActive ? 'active' : ''} ${selected ? 'selected' : ''} ${isBlocked ? 'blocked' : ''} ${data.status === 'blocked' ? 'flow-blocked' : ''}`}
      style={{ borderColor: isBlocked ? '#f44336' : data.color }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Handle type="target" position={Position.Left} />
      {data.flowOrder && <span className="flow-order-badge">{data.flowOrder}</span>}
      <div className="node-content">
        <span className="node-icon">{data.icon}</span>
        <span className="node-label">{data.label}</span>
        {isBlocked && <span className="blocked-badge">🚫</span>}
        {data.latency && <span className="latency-badge">{data.latency}ms</span>}
      </div>
      {selected && (
        <button className="node-delete-btn" onClick={handleDelete} title="Delete node">✕</button>
      )}
      {showTooltip && !selected && (
        <div className="node-tooltip">
          <div className="tooltip-title">{data.label}</div>
          <div className="tooltip-desc">{desc}</div>
          {data.port && <div className="tooltip-meta">Port: {data.port}</div>}
          {data.protocol && <div className="tooltip-meta">Protocol: {data.protocol}</div>}
          {data.latency && <div className="tooltip-meta">Latency: {data.latency}ms</div>}
          {isBlocked && <div className="tooltip-blocked">Network: BLOCKED</div>}
          {data.allowedRoutes && <div className="tooltip-meta">Routes: {data.allowedRoutes}</div>}
        </div>
      )}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default SystemNode;
