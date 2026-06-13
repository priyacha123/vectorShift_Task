// baseNode.js

import { Handle } from 'reactflow';

export const BaseNode = ({ title, children, handles = [], style = {} }) => {
  const nodeClass = `base-node node-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={nodeClass} style={style}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      <div className="node-header">
        <span className="node-title">{title}</span>
      </div>

      <div className="node-body">{children}</div>
    </div>
  );
};