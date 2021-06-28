import * as React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Layout, List } from "./views";
import { DetailState, GetAllColorsResponse } from "./services/types";
import { fetchAllColors } from "./services/api";
import chunk from "lodash.chunk";
import "./App.css";

export const App: React.FC = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  /** Binary state determing view.
   * If true, display a detailed color view
   * If false, display a paginated list of 12 colors
   */
  const [display, setDisplay] = React.useState<boolean>(false);

  /** Color to display in detail view */
  const [detailColor, setDetailColor] = React.useState<DetailState>(null);

  const { isError, error, data } = useQuery<GetAllColorsResponse, Error>(
    "allColors",
    fetchAllColors,
    { retry: false }
  );

  /** Callback to change views with clear button in detail view */
  const clearDetail = () => {
    history.push("/");
    setDisplay(false);
    setDetailColor(null);
  };

  /** Callback for the sidebar "random color" button
   *  Receive a number from 0 - max index of colors
   * Set the color at the random index in the detail view
   */
  const generateRandomColor = (num: number) => {
    toggleDetail(data![num]);
  };

  const pageCount = data && data.length / 12;
  const colorChunks = chunk(data, 12);

  function jumpToPage(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function renderPageLinks() {
    const itemArray = [];
    for (let i = 0; i < pageCount!; i++) {
      const pageNumberToDisplay = i + 1;

      itemArray.push(
        <li
          onClick={() => jumpToPage(i)}
          className={
            i === currentPage ? "page-list-item active" : "page-list-item"
          }
          key={i}
        >
          <span>{pageNumberToDisplay}</span>
        </li>
      );
    }

    return itemArray;
  }

  /** Callback to set a color as the detail view */
  const toggleDetail = (hexCode: string) => {
    setDisplay(true);
    setDetailColor(hexCode);
  };

  if (isError && error) {
    return (
      <Layout
        clearDetail={clearDetail}
        max={0}
        setRandomColor={generateRandomColor}
      >
        <h1>Error: {error.message}</h1>
      </Layout>
    );
  }

  if (data) {
    return (
      <Layout
        setRandomColor={generateRandomColor}
        max={data.length}
        clearDetail={clearDetail}
      >
        {pageCount && pageCount > 1 && (
          <>
            <List
              colors={colorChunks[currentPage]}
              setDetailColor={setDetailColor}
            />
            <ul className="page-list">{renderPageLinks()}</ul>
          </>
        )}
      </Layout>
    );
  }

  return <>Loading</>;
};
