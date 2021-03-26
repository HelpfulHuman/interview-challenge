import * as React from "react";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";

type SidebarProps = {
    /** Callback to set a random color in detail view */
    setRandomColor: (num: number) => void;
    /** Maximum value of all colors array */
    max: number;
}

/** Array to generate links from */
const colors: string[] = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Gray"];

export const Sidebar: React.FC<SidebarProps> = ({ setRandomColor, max }) => {
    const history = useHistory();

    /** Callback to navigate colors */
    const handleClick = (color: string) => {
        history.push(`/${color.toLowerCase()}`);
    }

    /** Create a list of colors that will serve as links */
    const renderList = () => {
        return colors.map((color, index) => <li key={index} onClick={(e) => handleClick(color)}>{color}</li>);
    };
    
    /** Method to randomly select a color for Detail view */
    const generateRandomColor = () => {
        const num = Math.floor(Math.random() * Math.floor(max))
        history.push("/");
        setRandomColor(num);
    }

    return (
        <div className="sidebar">
            <button className="random-color" onClick={generateRandomColor}>Random Color</button>
            <ul className="color-list">{renderList()}</ul>
        </div>
    );
};