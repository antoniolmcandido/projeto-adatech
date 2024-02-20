import React from "react";
import Name from '../name'
import './styles.css';
import Image from "../image";
import Description from "../Description";

const Card = ({ name, src, description }) => {
    return (
        <div className="card">
            <Name name={name} />

            <Image src={src} />

            <Description description={description} />
        </div>
    );
};

export default Card;