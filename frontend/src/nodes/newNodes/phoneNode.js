import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const PhoneNode = ({ id }) => {
  const [phone, setPhone] = useState("");

  return (
    <BaseNode
      title="Phone"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-number`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-call`,
        },
      ]}
    >
      <label>
        Number:
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 XXXXX XXXXX"
        />
      </label>
    </BaseNode>
  );
};