import * as React from "react";
import { SidebarProps } from "../services";
import { Header,  Main } from "./index";

/** Layout props can be extended from sidebar props if necessary */

export const Layout: React.FC<SidebarProps> = ({ clearDetail, children, max, setRandomColor }) => {
    return (
        <>
            <Header />
            <Main setRandomColor={setRandomColor} max={max} clearDetail={clearDetail}>
                {children}
            </Main>
        </>
    );
};