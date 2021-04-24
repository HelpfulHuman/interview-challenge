import * as React from "react";
import "./List.css";
import "./Card.css";

type ListCardProps = {
  /** Hex value of color to display */
  color: string;
  /** Callback to change from List View to Detail view displaying this card's color */
  setDetail: (color: string) => void;
};

/** Card component to be displayed in the list view */
export const ListCard: React.FC<ListCardProps> = ({ color, setDetail }) => {
  return (
    <div className="card" onClick={() => setDetail(color)}>
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" style={{ fill: color }} />
      </svg>
      <p className="card-text">{color}</p>
    </div>
  );
};
