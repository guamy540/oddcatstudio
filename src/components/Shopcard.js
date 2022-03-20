import React from "react";

export default function Shopcard(props){
    return(
        <div className="shopCard">
            <img src={require(`../images/${props.image}`)} 
                className="shopCardImage"/>
            <div className="shopCardText">
                <p className="shopCardTitle">{props.title}</p>
                <p className="shopCardPrice">{`$${props.price}`}</p>    
            </div>
        </div>
    )
}