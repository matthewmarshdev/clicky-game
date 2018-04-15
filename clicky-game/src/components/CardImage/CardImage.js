import React from "react";
import "./CardImage.css";

const CardImage = props => {
    return (
        <div>
            <img
                className="images"
                alt={props.name}
                src={props.image}
                onClick={() => {props.randomizeImages(); props.addScore()}}
            />
        </div>
    );
};

export default CardImage;