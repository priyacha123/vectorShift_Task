// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                {/* new nodes */}
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='feedback' label='Feedback' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='phone' label='Phone number' />
                <DraggableNode type='review' label='Review' />
            </div>
        </div>
    );
};
