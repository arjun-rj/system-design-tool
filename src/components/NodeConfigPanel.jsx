import React, { useState, useEffect } from 'react';
import descriptions from './descriptions';
import componentProperties from './componentProperties';

const DEFAULT_PROPS = { fields: ['label', 'notes'], custom: [] };

function NodeConfigPanel({ node, onUpdateNode, onDeleteNode, onClose }) {
  const [formData, setFormData] = useState({});

  const props = componentProperties[node?.data?.type] || DEFAULT_PROPS;

  useEffect(() => {
    if (!node) return;
    const d = node.data;
    const initial = {
      label: d.label || '',
      port: d.port || '',
      protocol: d.protocol || '',
      latency: d.latency || '',
      networkAllowed: d.networkAllowed !== false,
      allowedRoutes: d.allowedRoutes || '',
      notes: d.notes || '',
    };
    // Load custom field values
    props.custom.forEach((c) => {
      initial[c.key] = d[c.key] || '';
    });
    setFormData(initial);
  }, [node]);

  if (!node) return null;

  const desc = descriptions[node.data.type] || 'System component';

  const update = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    const out = {};
    props.fields.forEach((f) => {
      if (f === 'networkAllowed') {
        out.networkAllowed = formData.networkAllowed;
      } else if (f === 'latency') {
        out.latency = formData.latency ? Number(formData.latency) : undefined;
      } else {
        out[f] = formData[f] || undefined;
      }
    });
    props.custom.forEach((c) => {
      out[c.key] = formData[c.key] || undefined;
    });
    onUpdateNode(node.id, out);
  };

  const renderField = (fieldName) => {
    switch (fieldName) {
      case 'label':
        return (
          <div className="config-field" key="label">
            <label>Label</label>
            <input value={formData.label || ''} onChange={(e) => update('label', e.target.value)} />
          </div>
        );
      case 'port':
        return (
          <div className="config-field" key="port">
            <label>Port</label>
            <input value={formData.port || ''} onChange={(e) => update('port', e.target.value)} placeholder="e.g. 443, 8080" />
          </div>
        );
      case 'protocol':
        return (
          <div className="config-field" key="protocol">
            <label>Protocol</label>
            <select value={formData.protocol || ''} onChange={(e) => update('protocol', e.target.value)}>
              <option value="">-- Select --</option>
              <option value="HTTP">HTTP</option>
              <option value="HTTPS">HTTPS</option>
              <option value="TCP">TCP</option>
              <option value="UDP">UDP</option>
              <option value="gRPC">gRPC</option>
              <option value="WebSocket">WebSocket</option>
              <option value="AMQP">AMQP</option>
              <option value="MQTT">MQTT</option>
            </select>
          </div>
        );
      case 'latency':
        return (
          <div className="config-field" key="latency">
            <label>Simulated Latency (ms)</label>
            <input type="number" value={formData.latency || ''} onChange={(e) => update('latency', e.target.value)} placeholder="e.g. 50" />
          </div>
        );
      case 'networkAllowed':
        return (
          <div className="config-field" key="networkAllowed">
            <label>Network Access</label>
            <div className="toggle-row">
              <button className={`toggle-btn ${formData.networkAllowed ? 'allowed' : ''}`} onClick={() => update('networkAllowed', true)}>✅ Allowed</button>
              <button className={`toggle-btn ${!formData.networkAllowed ? 'blocked' : ''}`} onClick={() => update('networkAllowed', false)}>🚫 Blocked</button>
            </div>
            {!formData.networkAllowed && <p className="blocked-hint">Requests will fail at this node during simulation</p>}
          </div>
        );
      case 'allowedRoutes':
        return (
          <div className="config-field" key="allowedRoutes">
            <label>Allowed Routes (comma-separated node labels)</label>
            <input value={formData.allowedRoutes || ''} onChange={(e) => update('allowedRoutes', e.target.value)} placeholder="e.g. API Gateway, Cache" />
            <p className="field-hint">If set, requests can only flow to these specific nodes</p>
          </div>
        );
      case 'notes':
        return (
          <div className="config-field" key="notes">
            <label>Notes</label>
            <textarea value={formData.notes || ''} onChange={(e) => update('notes', e.target.value)} rows={3} placeholder="Corporate network rules, firewall config, etc." />
          </div>
        );
      default:
        return null;
    }
  };

  const renderCustomField = (c) => {
    if (c.type === 'select') {
      return (
        <div className="config-field" key={c.key}>
          <label>{c.label}</label>
          <select value={formData[c.key] || ''} onChange={(e) => update(c.key, e.target.value)}>
            <option value="">-- Select --</option>
            {c.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      );
    }
    return (
      <div className="config-field" key={c.key}>
        <label>{c.label}</label>
        <input
          type={c.type === 'number' ? 'number' : 'text'}
          value={formData[c.key] || ''}
          onChange={(e) => update(c.key, e.target.value)}
          placeholder={c.placeholder || ''}
        />
      </div>
    );
  };

  return (
    <div className="node-config-panel">
      <div className="config-header">
        <h3>{node.data.icon} Configure Node</h3>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="config-desc"><p>{desc}</p></div>
      <div className="config-body">
        {props.fields.map(renderField)}
        {props.custom.length > 0 && (
          <>
            <div className="config-section-divider">Component-Specific Settings</div>
            {props.custom.map(renderCustomField)}
          </>
        )}
      </div>
      <div className="config-footer">
        <button className="save-btn" onClick={handleSave}>💾 Save Configuration</button>
        <button className="delete-node-btn" onClick={() => onDeleteNode(node.id)}>🗑️ Delete Node</button>
      </div>
    </div>
  );
}

export default NodeConfigPanel;
