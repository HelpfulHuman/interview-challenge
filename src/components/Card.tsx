import * as React from "react";
import { DetailState } from "../services";
import "./Card.css";

type CardProps = {
  /** Color to display */
  color: string;
  /** Callback to set this card's color in detail view onClick */
  setDetailColor: React.Dispatch<React.SetStateAction<DetailState>>;
};

/** Normal sized card for List view*/
export const Card: React.FC<CardProps> = ({ color, setDetailColor }) => {
  return (
    <div className="card" onClick={() => setDetailColor(color)}>
      <svg width="100%" height="80%">
        <rect width="100%" height="100%" style={{ fill: color }} />
      </svg>
      <p className="card-text">{color}</p>
    </div>
  );
};
