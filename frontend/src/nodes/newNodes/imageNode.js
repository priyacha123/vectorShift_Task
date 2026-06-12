import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const ImageNode = ({ id }) => {
  const [style, setStyle] = useState("Realistic");

  return (
    <BaseNode
      title="Image"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-image`,
        },
      ]}
    >
      <label>
        Style:
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Realistic</option>
          <option>Anime</option>
          <option>3D</option>
        </select>
      </label>
    </BaseNode>
  );
};