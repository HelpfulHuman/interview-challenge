import * as React from "react";
import {Sidebar} from "./Sidebar";
import "./Main.css";

type MainProps = {
        /** Callback to set a random color in detail view */
        setRandomColor: (num: number) => void;
        /** Length of all colors array */
        max: number;
}

export const Main: React.FC<MainProps> = ({ children, max, setRandomColor }) => {
    return (
        <>
        <Sidebar setRandomColor={setRandomColor} max={max} />
        <div className="main flex-grid">
            {children}
        </div>
        </>
    );
};