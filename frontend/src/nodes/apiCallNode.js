import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ApiCallNode = ({ id }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'params' },
        { type: 'source', position: Position.Right, id: 'data' }
    ];

    return (
        <BaseNode id={id} label="API Call" handles={handles}>
            <div className="node-label-group">
                <label className="node-label">Endpoint URL</label>
                <input type="text" placeholder="https://api.example.com" className="node-input" />
            </div>
            <div className="node-label-group">
                <label className="node-label">Method</label>
                <select className="node-select">
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>
            </div>
        </BaseNode>
    );
};
