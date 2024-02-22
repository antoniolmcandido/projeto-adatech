import React from "react";
import Name from '../name'
import './styles.css';
import Image from "../image";
import Description from "../description";
import Button from "../button";

const Card = ({ name, src, description }) => {
    return (
        <div className="card">
            <Name name={name} />
            <Image src={src} />
            <Description description={description} />
            <Button />
        </div>
    );
};

export default Card; 