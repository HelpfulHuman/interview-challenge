export enum ColorCategories {
    Red = "Red",
    Orange = "Orange",
    Yellow = "Yellow",
    Green = "Green",
    Blue = "Blue",
    Purple = "Purple",
    Brown = "Brown",
    Gray = "Gray"
}

export type Color = "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "brown" | "gray";

export type DetailState = string | null;

export type GetAllColorsResponse = string[];