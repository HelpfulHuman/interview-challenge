import * as React from "react";

const HeaderStyle = {
    position: "absolute" as const,
    width: "100%",
    height: "100px",
    left: "0px",
    top: "0px",
    backgroundColor: "#353d3d"
};

const InputStyle = {
    position: "absolute" as const,
    width: "320px",
    left: "75%",
    right: "2.78%",
    top: "20%",
    bottom: "20%",
    border: "1px solid #363C3C",
    boxSizing: "border-box" as const,
    borderRadius: "10px",
    fontSize: "1.5rem",
    fontFamily: "'Source Serif Pro', serif",
    paddingLeft: "1em"
};

const SvgStyle = {
    postion: "absolute" as const,
    margin: "1.3em"
};

export const Header: React.FC = () => {
    return (
        <div style={HeaderStyle}>
            <svg width="52px" height="52px" style={SvgStyle} viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g fill="#fff">
                    <path d="M26.216,1.895 C12.806,1.895 1.896,12.805 1.896,26.215 C1.896,39.626 12.806,50.536 26.216,50.536 C39.626,50.536 50.536,39.626 50.536,26.215 C50.536,12.805 39.626,1.895 26.216,1.895 M26.216,52.431 C11.76,52.431 0,40.67 0,26.215 C0,11.76 11.76,0 26.216,0 C40.671,0 52.431,11.76 52.431,26.215 C52.431,40.67 40.671,52.431 26.216,52.431" id="Fill-3"></path>
                    <path d="M26.558,26.002 C31.58,24.335 35.918,22.895 35.918,15.042 L35.918,14.63 L35.918,14.173 L35.918,13 L33.889,13 L33.889,15.042 C33.889,21.431 30.718,22.483 25.918,24.077 C24.173,24.656 22.207,25.319 20.38,26.365 L20.38,13 L18.351,13 L18.351,27.772 C17.481,28.503 16.693,29.381 16.029,30.441 L16.029,13 L14,13 L14,38.565 L14,40.607 L16.029,40.607 L16.029,39.435 L16.029,38.565 C16.029,29.497 21.622,27.64 26.558,26.002" id="Fill-6"></path>
                    <path d="M37.89,13 L37.89,13.266 L37.89,14.173 L37.89,14.63 L37.89,15.042 C37.89,24.15 32.285,26.011 27.338,27.652 C22.327,29.315 18,30.751 18,38.565 L18,39.435 L18,40.607 L20.03,40.607 L20.03,38.565 C20.03,32.216 23.191,31.167 27.977,29.578 C29.73,28.996 31.704,28.331 33.538,27.277 L33.538,40.607 L35.568,40.607 L35.568,25.867 C36.439,25.133 37.227,24.252 37.89,23.189 L37.89,40.607 L39.919,40.607 L39.919,15.042 L39.919,13.266 L39.919,13 L37.89,13 Z" id="Fill-8"></path>
                </g>
            </svg>

            <input type="text" style={InputStyle} placeholder="Search" />
        </div >
    );
};