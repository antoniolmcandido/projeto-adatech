/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";

const Image = (props) => {
    return (
        <img
            className="image"
            src={props.src}
            width={props.width ?? "auto"}
            height={props.heigth ?? "160px"}
        />
    );
};

export default Image;