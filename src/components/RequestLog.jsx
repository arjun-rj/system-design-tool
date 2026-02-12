import React from 'react';
import descriptions from './descriptions';

function RequestLog({ requests, nodes }) {
  // Get the latest active or completed request for flow description
  const activeReq = requests.find((r) => r.status === 'active') ||
    [...requests].reverse().find((r) => r.status === 'completed' || r.status === 'blocked');

  return (
    <div className="request-log">
      <h3>Request Flow Log</h3>
      <div className="log-entries">
        {requests.length === 0 ? (
          <p className="empty-log">No requests yet. Add components and click "Request"</p>
        ) : (
          requests.map((req) => (
            <div key={req.id} className={`log-entry ${req.status}`}>
              <div className="log-entry-header">
                <span className="req-id">#{req.id.slice(0, 6)}</span>
                {req.reqLabel && (
                  <span className="req-type-label" style={{ background: req.reqColor + '33', color: req.reqColor, borderColor: req.reqColor }}>
                    {req.reqLabel}
                  </span>
                )}
                <span className={`status-badge ${req.status}`}>{req.status}</span>
              </div>
              {req.blockedAt && (
                <div className="blocked-info">Blocked at: {req.blockedAt}</div>
              )}
              {req.routeViolation && (
                <div className="blocked-info">{req.routeViolation}</div>
              )}
              <div className="flow-path">
                {req.pathLabels.map((label, idx) => (
                  <span
                    key={idx}
                    className={`path-step ${idx <= req.currentIndex ? 'visited' : ''} ${idx === req.currentIndex && req.status === 'blocked' ? 'step-blocked' : ''}`}
                  >
                    <span className="step-num">{idx + 1}</span>
                    {label}
                    {idx < req.pathLabels.length - 1 && ' → '}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {activeReq && nodes && nodes.length > 0 && (
        <div className="flow-description-panel">
          <h4>Flow Description</h4>
          <div className="flow-desc-list">
            {activeReq.path.map((nodeId, idx) => {
              const node = nodes.find((n) => n.id === nodeId);
              if (!node) return null;
              const compType = node.data.type;
              const desc = descriptions[compType] || 'Processes the request';
              const visited = idx <= activeReq.currentIndex;
              const isCurrent = idx === activeReq.currentIndex;
              const isBlocked = isCurrent && activeReq.status === 'blocked';
              return (
                <div
                  key={nodeId}
                  className={`flow-desc-item ${visited ? 'visited' : ''} ${isCurrent ? 'current' : ''} ${isBlocked ? 'blocked' : ''}`}
                >
                  <span className="flow-desc-num">{idx + 1}</span>
                  <div className="flow-desc-content">
                    <span className="flow-desc-name">{node.data.icon} {node.data.label}</span>
                    <span className="flow-desc-text">{desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestLog;
