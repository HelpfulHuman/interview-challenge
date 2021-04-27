// const API_ROOT = "http://localhost:3000";
const API_ROOT = "https://secure-reaches-25083.herokuapp.com";

export const fetchAllColors = () => {
  return fetch(`${API_ROOT}/all`).then((response) => response.json());
};

export const fetchColor = (color: string) => {
  return fetch(`${API_ROOT}/colors/${color}`).then((response) =>
    response.json()
  );
};
