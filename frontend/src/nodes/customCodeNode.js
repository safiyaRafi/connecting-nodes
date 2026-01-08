import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const CustomCodeNode = ({ id }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'in' },
        { type: 'source', position: Position.Right, id: 'out' }
    ];

    return (
        <BaseNode id={id} label="Custom Code" handles={handles}>
            <div className="node-label-group">
                <label className="node-label">JavaScript</label>
                <textarea
                    className="node-textarea"
                    defaultValue="console.log('Hello World');"
                    style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
                />
            </div>
        </BaseNode>
    );
};
