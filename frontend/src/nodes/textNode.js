import React, { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    updateNodeField(id, 'text', newText);
  };

  // Variable detection: find all {{ variable_name }}
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(m => m[1]))];
    setVariables(uniqueVars);
  }, [currText]);

  // Dynamic resizing
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handles = [
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * 100 / (variables.length + 1)}%` }
    })),
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <div className="node-label-group">
        <label className="node-label">Text Content</label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="node-textarea"
          rows={1}
        />
      </div>
    </BaseNode>
  );
};
