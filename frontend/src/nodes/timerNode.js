import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => {
    const [seconds, setSeconds] = useState(60);

    const handles = [
        { type: 'source', position: Position.Right, id: 'trigger' }
    ];

    return (
        <BaseNode id={id} label="Timer" handles={handles}>
            <div className="node-label-group">
                <label className="node-label">Seconds</label>
                <input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    className="node-input"
                />
            </div>
            <button className="node-btn" style={{ marginTop: '10px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '5px' }}>
                Start Timer
            </button>
        </BaseNode>
    );
};
