import * as React from "react";
import {JumboCard, MiniCard } from "../components";
import { DetailState } from "../services";
import "../components/List.css";
import "../components/Card.css";

type DetailProps = {
    /** Callback to change the display mode */
    changeDisplay: () => void;
    /** Color to display in the jumbotron */
    color: string;
    /** Related colors to show */
    relatedColors: string[];
    /** Callback to allow MiniCards update the detail color */
    setDetailColor: React.Dispatch<React.SetStateAction<DetailState>>;
}

export const Detail: React.FC<DetailProps> = ({ changeDisplay, color, relatedColors, setDetailColor}) => {
    /** Create a row of smaller cards to display underneath jumbotron */
    const renderMiniCards = () => relatedColors.map((color: string, index) => {
    return (
        <MiniCard
            color={color}
            key={index}
            setDetailColor={setDetailColor}
        />
        );
    });

    return (
        <>
            <JumboCard color={color} />
            <div className="break" />
            <div className="mini-col">
                {renderMiniCards()}
            </div>
            <div className="break" />
            <button className="clear" onClick={changeDisplay}>Clear</button>
        </>
    );
};