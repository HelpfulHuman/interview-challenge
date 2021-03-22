import * as React from "react";

const SidebarStyle = {
    position: "absolute" as const,
    height: "100%",
    width: "320px",
    left: "0px",
    top: "100px",
    filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
    backgroundColor: "#D6D8D8"
};

const ButtonStyle = {
    position: "absolute" as const,
    borderRadius: "10px",
    width: "260px",
    height: "60px",
    top: " 80px",
    left: "30px",
    fontFamily: "'Source Serif Pro', serif",
    fontWeight: 600,
    fontSize: "24px"
};

const ListStyle = {
    position: "relative" as const,
    listStyleType: "none",
    top: "140px",
    color: "#363C3C",
    fontFamily: "'Source Serif Pro', serif",
    fontSize: "28px",
    lineHeight: "35px"
};

const ListItemStyle = {
    paddingBottom: "0.5em"
};

const colors: string[] = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Gray"];

export const Sidebar: React.FC = () => {
    const renderList = () => {
        return colors.map((color, index) => <li style={ListItemStyle} key={index}>{color}</li>);
    };

    return (
        <div style={SidebarStyle}>
            <button style={ButtonStyle}>Random Color</button>
            <ul style={ListStyle}>{renderList()}</ul>
        </div>
    );
};