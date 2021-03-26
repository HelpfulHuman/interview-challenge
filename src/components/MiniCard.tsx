import * as React from "react";
import { DetailState } from "../services";

type MiniCardProps = {
    /** Color to display */
    color: string;
    /** Callback to set this card's color in detail onClick */
    setDetailColor: React.Dispatch<React.SetStateAction<DetailState>>;
}

/** Smaller card to be displayed underneath the jumbo detail card */
export const MiniCard: React.FC<MiniCardProps> = ({ color, setDetailColor }) => {
    return (
        <div className="mini-card" onClick={(e) => setDetailColor(color)}>
            <svg width="175" height="175">
                <rect width="175" height="175" style={{fill: color}} />
            </svg>
            <p className="mini-text">{color}</p>
        </div>
    );
};