import React from "react";
import Name from '../name'
import './styles.css';
import Image from "../image";
import Description from "../description";
import Button from "../button";

const Card = ({ name, src, description, text, heroButton }) => {
    return (
        <div className="card">
            <Image src={src} />
            <Name name={name} />
            <Description description={description} />
            <Button text={text} heroButton={heroButton}/>
        </div>
    );
};

export default Card; 