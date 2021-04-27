import * as React from "react";
import { CardColumn } from "../components";
import "../components/List.css";
import { chunk } from "lodash";

type ListPageProps = {
  /** Array of 12 colors to create page from */
  colors: string[];
  /** Callback to set the selected color in detail view */
  setDetail: (color: string) => void;
};

/** This component will display a paginated List */
export const ListPage: React.FC<ListPageProps> = ({ colors, setDetail }) => {
  /** Create a card column. */
  const createColumn = (colorArray: string[], index: number) => {
    return (
      <>
        <CardColumn
          key={index}
          row={index}
          colors={colorArray}
          setDetail={setDetail}
        />
      </>
    );
  };

  /** Create 4 columns to display on this view */
  const renderPage = (colorArray: string[]) => {
    /** Create smaller arrays of 4 colors */
    const smallerArrays = chunk(colorArray, 4);
    /** Turn new arrays into columns */
    return smallerArrays.map((arrayOfThree, index) =>
      createColumn(arrayOfThree, index)
    );
  };

  return <>{renderPage(colors)}</>;
};
