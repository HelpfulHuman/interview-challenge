const API_ROOT = "http://localhost:3000";

export const fetchAllColors = () => {
    return fetch(`${API_ROOT}/all`)
    .then(response => response.json());
}

export const fetchColor = (color: string) => {
    return fetch(`${API_ROOT}/${color}`)
    .then(response => response.json());
}