import * as React from "react";
import "./JumboCard.css";

type JumboCardProps = {
  /** Color to display in jumbotron card */
  color: string;
};

/** Create a large SVG to display in the detail view */
export const JumboCard: React.FC<JumboCardProps> = ({ color }) => {
  return (
    <div className="jumbo col">
      <div className="jumbo card">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" style={{ fill: color }} />
        </svg>
        <p className="jumbo card-text">{color}</p>
      </div>
    </div>
  );
};
