import React from "react";
import "./styles.css";

// function onClick() {
//     redirect("/details")
// };

const Button = ({ text }) => {
    return <button className="button" type="submit">{text}</button>
};

export default Button;
