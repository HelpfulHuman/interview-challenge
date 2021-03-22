import * as React from "react";
import { Sidebar } from "./Sidebar";

export const Main: React.FC = ({ children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
};