export type DetailState = string | null;

export type GetAllColorsResponse = string[];

export interface SidebarProps {
    /** Callback to remove the detail color display from state */
    clearDetail: () => void;
    /** Maximum value of all colors array */
    max: number;
   /** Callback to set a random color in detail view */
   setRandomColor: (num: number) => void;
};