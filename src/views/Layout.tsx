import * as React from "react";
import { Header, Main } from "./index";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}