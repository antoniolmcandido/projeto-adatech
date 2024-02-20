import React from "react";
import "./styles.css";

function onClick() {
    redirect("/details")
};

const Button = ({ onClick }) => {
    return <button type="submit" onClick={onClick()}>Ver detalhes</button>
};

export default Button;
