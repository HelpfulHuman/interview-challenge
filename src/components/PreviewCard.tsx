import * as React from "react";

type PreviewCardProps = {
    /** Hex value of color to display */
    color: string;
};

const StyledDiv = {
    float: "left" as const
};

export const PreviewCard: React.FC<PreviewCardProps> = ({ color }) => {
    return (
        <div style={StyledDiv}>
            <svg width="100" height="100">
                <rect width="100" height="100" style={{fill: color}} />
            </svg>
            <p>{color}</p>
        </div>
    );
};