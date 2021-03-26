import * as React from "react";
import {Sidebar} from "./Sidebar";
import { SidebarProps } from "../services";
import "./Main.css";

/** Main props can be extended from sidebar props if necessary */

export const Main: React.FC<SidebarProps> = ({ clearDetail, children, max, setRandomColor }) => {
    return (
        <>
        <Sidebar setRandomColor={setRandomColor} max={max} clearDetail={clearDetail} />
        <div className="main flex-grid">
            {children}
        </div>
        </>
    );
};