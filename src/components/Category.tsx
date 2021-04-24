import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchColor } from "../services/api";
import { List } from "./List";
import { Loading } from "./Loading";
import { NoRoute } from "./NoRoute";

type CategoryProps = {
  /** Callback to set the selected color in detail view */
  setDetail: (color: string) => void;
};

type CategoryParams = {
  /** Recieve a color from params */
  color: string;
};

/** Array to check params against */
const appColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "brown",
  "gray",
];

/** Displays a List component with a specified color set */
export const Category: React.FC<CategoryProps> = ({ setDetail }) => {
  const { color } = useParams<CategoryParams>();

  /** Dynamically generate react query key. */
  const queryKey = `${color}Query`;

  const { isLoading, error, data } = useQuery<string[], Error>(
    [queryKey, color],
    () => fetchColor(color)
  );

  /** If the param isn't an acceptable color, send to 404 */
  if (!appColors.includes(color)) {
    return <NoRoute />;
  }

  if (isLoading) return <Loading />;

  if (error) return <>{`Error: ${error.message}.`}</>;

  return <List setDetail={setDetail} colorArray={data!} />;
};
