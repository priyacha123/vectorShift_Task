// textNode.js

import { useMemo, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)].map((match) => match[1]);
    return [...new Set(matches)];
  }, [currText]);

  const width = Math.min(Math.max(220, currText.length * 8), 420);
  const height = Math.min(Math.max(100, currText.split("\n").length * 28 + 80), 260);

  const variableHandles = variables.map((variable, index) => ({
    type: "target",
    position: Position.Left,
    id: `${id}-${variable}`,
    style: {
      top: `${70 + index * 28}px`,
    },
  }));

  return (
    <BaseNode
      title="Text"
      style={{
        width,
        minHeight: height,
      }}
      handles={[
        ...variableHandles,
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            minHeight: 70,
            resize: "none",
          }}
          placeholder="Type text with variables like {{input}}"
        />
      </label>
    </BaseNode>
  );
};