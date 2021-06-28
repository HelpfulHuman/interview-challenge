import * as React from "react";
import { Header, Main, Sidebar } from "./index";
import { SidebarProps } from "../services";
import "./Layout.css";

/** Layout props can be extended from sidebar props if necessary */

export const Layout: React.FC<SidebarProps> = ({
  clearDetail,
  children,
  max,
  setRandomColor,
}) => {
  return (
    <div className="layout">
      <Header />
      <Sidebar
        setRandomColor={setRandomColor}
        max={max}
        clearDetail={clearDetail}
      />
      <Main>{children}</Main>
    </div>
  );
};
