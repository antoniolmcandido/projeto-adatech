import React from "react";
import "./styles.css";

const Button = ({text, heroButton}) => {

    const handleClick = () => {
        window.location.href = `/details/${heroButton}`;
    };

    return (
      <button className="button" onClick={handleClick}>
          {text}
      </button>
    );
};

export default Button;
