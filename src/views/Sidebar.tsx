import * as React from "react";
import { useHistory } from "react-router-dom";
import { SidebarProps } from "../services";
import "./Sidebar.css";

/** Array to generate links from */
const colors: string[] = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Brown",
  "Gray",
];

export const Sidebar: React.FC<SidebarProps> = ({
  clearDetail,
  max,
  setRandomColor,
}) => {
  const history = useHistory();

  /** Callback to navigate colors */
  const handleClick = (color: string) => {
    clearDetail();
    history.push(`/${color.toLowerCase()}`);
  };

  /** Create a list of colors that will serve as links */
  const renderList = () => {
    return colors.map((color, index) => (
      <li key={index} onClick={() => handleClick(color)}>
        <span>{color}</span>
      </li>
    ));
  };

  /** Method to randomly select a color for Detail view */
  const generateRandomColor = () => {
    if (max === 0) return;
    const num = Math.floor(Math.random() * Math.floor(max));
    history.push("/");
    setRandomColor(num);
  };

  return (
    <div className="sidebar">
      <button className="random-color" onClick={generateRandomColor}>
        Random Color
      </button>
      <ul className="color-list">{renderList()}</ul>
    </div>
  );
};
