// toolbar.js

import { DraggableNode } from './draggableNode';
import { SubmitButton } from './submit';

export const PipelineToolbar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Node Library</h2>
        <p>Drag to canvas</p>
      </div>

      <div className="node-list">
        <DraggableNode type="customInput" label="INPUT NODES" />
        <DraggableNode type="text" label="LOGIC" />
        <DraggableNode type="llm" label="AI MODELS" />
        <DraggableNode type="customOutput" label="OUTPUTS" />
        <DraggableNode type="email" label="EMAIL" />
        <DraggableNode type="feedback" label="FEEDBACK" />
        <DraggableNode type="image" label="IMAGE" />
        <DraggableNode type="phone" label="PHONE" />
        <DraggableNode type="review" label="REVIEW" />
      </div>

      <SubmitButton />
    </aside>
  );
};
