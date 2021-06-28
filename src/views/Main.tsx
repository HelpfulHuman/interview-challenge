import * as React from "react";

/**
 * This component is going to render all the cards
 * And contain the logic for displaying a detailed view if we are
 */
export const Main: React.FC = ({ children }) => {
  return <div className="main">{children}</div>;
};
