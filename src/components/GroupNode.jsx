import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import descriptions from './descriptions';

function GroupNode({ data, selected }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const desc = descriptions[data.type] || 'Container component';
  const isBlocked = data.networkAllowed === false;

  const handleDelete = (e) => {
    e.stopPropagation();
    if (data.onDelete) data.onDelete();
  };

  return (
    <div
      className={`group-node ${selected ? 'selected' : ''} ${isBlocked ? 'blocked' : ''}`}
      style={{
        borderColor: isBlocked ? '#f44336' : data.color,
        width: data.width || 500,
        height: data.height || 300,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Handle type="target" position={Position.Left} />
      <div className="group-header" style={{ background: data.color + '22', borderBottomColor: data.color + '44' }}>
        <span className="group-icon">{data.icon}</span>
        <span className="group-label">{data.label}</span>
        {isBlocked && <span className="blocked-badge">🚫</span>}
        {data.subLabel && <span className="group-sublabel">{data.subLabel}</span>}
      </div>
      {selected && (
        <button className="node-delete-btn" onClick={handleDelete} title="Delete node">✕</button>
      )}
      {showTooltip && !selected && (
        <div className="node-tooltip">
          <div className="tooltip-title">{data.label}</div>
          <div className="tooltip-desc">{desc}</div>
          {isBlocked && <div className="tooltip-blocked">Network: BLOCKED</div>}
        </div>
      )}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default GroupNode;
