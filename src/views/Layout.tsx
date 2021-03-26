import * as React from "react";
import { Header,  Main } from "./index";

type LayoutProps = {
    /** Callback to set a random color in detail view */
    setRandomColor: (num: number) => void;
    /** Maximum value of all colors array */
    max: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, max, setRandomColor }) => {
    return (
        <>
            <Header />
            <Main setRandomColor={setRandomColor} max={max} >
                {children}
            </Main>
        </>
    );
};