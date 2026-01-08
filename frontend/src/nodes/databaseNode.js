import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'query' },
        { type: 'source', position: Position.Right, id: 'results' }
    ];

    return (
        <BaseNode id={id} label="Database" handles={handles}>
            <div className="node-label-group">
                <label className="node-label">Connection String</label>
                <input type="password" value="********" className="node-input" />
            </div>
            <div className="node-label-group">
                <label className="node-label">Table</label>
                <input type="text" placeholder="users" className="node-input" />
            </div>
        </BaseNode>
    );
};
