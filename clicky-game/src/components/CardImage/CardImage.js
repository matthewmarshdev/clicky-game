import React from "react";
import "./CardImage.css";

const CardImage = props => {
    return (
        <div>
            <img
                className="images"
                alt={props.name}
                src={props.image}
                onClick={() => {props.handleClick(props.id)}}
            />
        </div>
    );
};

export default CardImage;