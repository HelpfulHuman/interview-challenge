import * as React from "react";
import { useQuery } from "react-query";
import { Switch, Route, useHistory } from "react-router-dom";
import { Layout, Detail } from "./views";
import { Category, List, Loading } from "./components";
import { DetailState, GetAllColorsResponse } from "./services/types";
import { fetchAllColors } from "./services/api";
import "./App.css";

export const App: React.FC = () => {
  /** Binary state determing view.
   * If true, display a detailed color view
   * If false, display a paginated list of 12 colors
   */
  const [display, setDisplay] = React.useState<boolean>(false);
  const history = useHistory();

  /** Color to display in detail view */
  const [detailColor, setDetailColor] = React.useState<DetailState>(null);

  const { isLoading, isError, error, data } = useQuery<
    GetAllColorsResponse,
    Error
  >("allColors", fetchAllColors);

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

  /** Callback to set a color as the detail view */
  const toggleDetail = (hexCode: string) => {
    setDisplay(true);
    setDetailColor(hexCode);
  };

  if (isLoading) return <Loading />;

  if (isError && error) {
    return <>Error: {error.message}</>;
  }

  return (
    <Layout
      setRandomColor={generateRandomColor}
      max={data!.length}
      clearDetail={clearDetail}
    >
      <Switch>
        <Route exact path="/">
          {display && detailColor ? (
            <Detail
              color={detailColor}
              relatedColors={data!.slice(0, 4)}
              setDetailColor={setDetailColor}
              changeDisplay={clearDetail}
            />
          ) : (
            <List setDetail={toggleDetail} colorArray={data!} />
          )}
        </Route>
        <Route path="/:color">
          {display && detailColor ? (
            <Detail
              color={detailColor}
              relatedColors={data!.slice(0, 4)}
              setDetailColor={setDetailColor}
              changeDisplay={clearDetail}
            />
          ) : (
            <Category setDetail={toggleDetail} />
          )}
        </Route>
      </Switch>
    </Layout>
  );
};
