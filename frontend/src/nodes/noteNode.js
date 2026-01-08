import React from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="Note" handles={[]}>
            <div className="node-label-group">
                <textarea
                    placeholder="Add a note..."
                    className="node-textarea"
                    defaultValue={data?.note || ''}
                />
            </div>
        </BaseNode>
    );
};
