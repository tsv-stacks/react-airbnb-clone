import React from "react";
import star from '../assets/star.png'

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img className="card--star" src={star} />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>  / person</p>
        </div>
    )
}
