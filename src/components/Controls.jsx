import React, { useState } from 'react';

function Controls({ isPlaying, onPlay, onPause, onReset, onAddRequest, requestCount, speed, onSpeedChange, requestTypes }) {
  const [showReqMenu, setShowReqMenu] = useState(false);

  const handleAddRequest = (typeId) => {
    onAddRequest(typeId);
    setShowReqMenu(false);
  };

  return (
    <div className="controls">
      <button className={`control-btn play ${isPlaying ? 'active' : ''}`} onClick={onPlay} disabled={isPlaying}>
        ▶️ Play
      </button>
      <button className={`control-btn pause ${!isPlaying ? 'active' : ''}`} onClick={onPause} disabled={!isPlaying}>
        ⏸️ Pause
      </button>
      <button className="control-btn reset" onClick={onReset}>🔄 Reset</button>
      <div className="request-dropdown-wrap">
        <button className="control-btn add-request" onClick={() => setShowReqMenu(!showReqMenu)}>
          ➕ Request ▾
        </button>
        {showReqMenu && (
          <div className="request-type-menu">
            {(requestTypes || []).map((rt) => (
              <button key={rt.id} className="req-type-item" onClick={() => handleAddRequest(rt.id)}
                style={{ borderLeftColor: rt.color }}>
                {rt.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="speed-control">
        <label>Speed:</label>
        <select value={speed} onChange={(e) => onSpeedChange(Number(e.target.value))}>
          <option value={2000}>0.5x</option>
          <option value={1000}>1x</option>
          <option value={500}>2x</option>
          <option value={250}>4x</option>
        </select>
      </div>
      <span className="request-count">Requests: {requestCount}</span>
    </div>
  );
}

export default Controls;
