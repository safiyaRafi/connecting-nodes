import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: `${100 / 3}%` } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200 / 3}%` } },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles}>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        State of the art LLM for your pipeline needs.
      </span>
    </BaseNode>
  );
};
