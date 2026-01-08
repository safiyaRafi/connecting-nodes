import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar-container">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='note' label='Note' />
            <DraggableNode type='timer' label='Timer' />
            <DraggableNode type='code' label='JS Code' />
            <DraggableNode type='api' label='API Call' />
            <DraggableNode type='database' label='Database' />
        </div>
    );
};
