import * as React from "react";
import { Card } from "../components";
import { DetailState } from "../services";
import "./List.css";

type ListProps = {
  /** Array of colors */
  colors: string[];
  /** Callback to set color for detail view */
  setDetailColor: React.Dispatch<React.SetStateAction<DetailState>>;
};

/** View to display 12 color swatches at a time */
export const List: React.FC<ListProps> = ({ colors, setDetailColor }) => {
  console.log(colors);
  const renderCards = () =>
    colors.map((color, index) => {
      return <Card color={color} key={index} setDetailColor={setDetailColor} />;
    });

  return <>{renderCards()}</>;
};
