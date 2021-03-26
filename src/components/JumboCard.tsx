import * as React from "react";

type JumboCardProps = {
    /** Color to display in jumbotron card */
    color: string;
}

/** Create a large SVG to display in the detail view */
export const JumboCard: React.FC<JumboCardProps> = ({color} ) => {
    return (
        <div className="jumbo-col">
            <svg width="1040px" height="552px">
                <rect width="1040px" height="552px" style={{fill: color}} />
            </svg>
            <p className="jumbo-text">{color}</p>
        </div>
    );
};