import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const FeedbackNode = ({ id }) => {
  const [rating, setRating] = useState("5");

  return (
    <BaseNode
      title="Feedback"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-feedback`,
        },
      ]}
    >
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
    </BaseNode>
  );
};