import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const EmailNode = ({ id }) => {
  const [email, setEmail] = useState("");

  return (
    <BaseNode
      title="Email"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-message`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-sent`,
        },
      ]}
    >
      <label> 
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
        />
      </label>
    </BaseNode>
  );
};