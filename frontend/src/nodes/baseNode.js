// baseNode.js

import { Handle } from 'reactflow';

export const BaseNode = ({ title, children, handles = [], style = {} }) => {
  return (
    <div
      style={{
        width: 200,
        minHeight: 100,
        border: '1px solid black',
        padding: 15,
        borderRadius: 10,
        ...style,
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      <div style={{ padding: 5 }}>
        <span>{title}</span>
      </div>

      <div style={{ padding: 5 }}>
        {children}
      </div>
    </div>
  );
};