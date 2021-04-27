import * as React from "react";
import { DetailState } from "../services";
import "./MiniCard.css";

type MiniCardProps = {
  /** Color to display */
  color: string;
  /** Callback to set this card's color in detail onClick */
  setDetailColor: React.Dispatch<React.SetStateAction<DetailState>>;
};

/** Smaller card to be displayed underneath the jumbo detail card */
export const MiniCard: React.FC<MiniCardProps> = ({
  color,
  setDetailColor,
}) => {
  return (
    <div className="mini-card" onClick={() => setDetailColor(color)}>
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" style={{ fill: color }} />
      </svg>
      <p className="card-text mini">{color}</p>
    </div>
  );
};
