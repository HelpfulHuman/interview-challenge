import * as React from "react";
import chunk from "lodash.chunk";
import { ListPage } from "../views";
import "./List.css";

type ListProps = {
  /** Array of colors to display */
  colorArray: string[];
  /** Set color for Detail view */
  setDetail: (color: string) => void;
};

export const List: React.FC<ListProps> = ({ colorArray, setDetail }) => {
  /** Page currently being displayed */
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  /** Number of pages = Length of colorArray / 12 */
  const numOfPages: number = Math.ceil(colorArray.length / 12);

  /** Create page based on current chunk of colors */
  const createPage = (chunkOfColors: string[]) => (
    <ListPage colors={chunkOfColors} setDetail={setDetail} />
  );

  /** To display a page of colors, jump to an index in the array  */
  const jumpToPage = (pageNumber: number) => setCurrentPage(pageNumber);

  /** Create clickable list to navigate through colors */
  const renderPageLinks = () => {
    // Store <li> components in an array.
    const itemArray = [];

    for (let i = 0; i < numOfPages; i++) {
      // Display links starting at 1 instead of 0
      const pageNumberToDisplay = i + 1;

      itemArray.push(
        <li
          onClick={() => jumpToPage(i)}
          /** Active page gets bolded and underlined*/
          className={
            i === currentPage ? "page-list-item active" : "page-list-item"
          }
        >
          <span>{pageNumberToDisplay}</span>
        </li>
      );
    }

    return itemArray;
  };

  /** Create smaller arrays of 12, and display current page selection */
  const renderListPages = (originalColorArray: string[]) => {
    // 1. Break array into smaller arrays of 12
    const chunks = chunk(originalColorArray, 12);
    // 2. Pass the currently displayed array to PageList
    return createPage(chunks[currentPage]);
  };

  return (
    <>
      {renderListPages(colorArray)}
      <ul className="page-list">{renderPageLinks()}</ul>
    </>
  );
};
