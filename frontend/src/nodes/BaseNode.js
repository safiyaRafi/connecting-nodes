import React from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div className="custom-node">
      <div className="node-header">
        <span className="node-title">{label}</span>
      </div>
      <div className="node-content">
        {children}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id ? `${id}-${handle.id}` : id}
          style={handle.style}
        />
      ))}
    </div>
  );
};
