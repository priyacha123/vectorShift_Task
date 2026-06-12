import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const ReviewNode = ({ id, data }) => {
  const [platform, setPlatform] = useState("");
const [reviewText, setReviewText] = useState(
  data?.reviewText || ""
);

  return (
    <BaseNode
      title="Reviews"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-content`,
          style: { top: "35%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-rating`,
          style: { top: "65%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-review`,
        },
      ]}
    >
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows={4}
          style={{ width: "100%" }}
          placeholder="Write review..."
        />
    </BaseNode>
  );
};
