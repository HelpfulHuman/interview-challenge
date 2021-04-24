import * as React from "react";
import { ListCard } from "./ListCard";

type CardColumnProps = {
  /** Colors to display in this column */
  colors: string[];
  /** This row's index */
  row: number;
  /** Callback to set selected color in detail view */
  setDetail: (color: string) => void;
};

export const CardColumn: React.FC<CardColumnProps> = ({
  colors,
  row,
  setDetail,
}) => {
  /** Dynamically create the column name for flexbox */
  const createClassName = (row: number) => `col-${row}`;

  /** Create the color card to display */
  const createCard = (color: string, index: number) => {
    return <ListCard setDetail={setDetail} color={color} key={index} />;
  };

  /** Map through array and create a card for each entry */
  const renderCards = () => {
    return colors.map((color: string, index: number) => {
      return createCard(color, index);
    });
  };

  return <div className={createClassName(row)}>{renderCards()}</div>;
};
