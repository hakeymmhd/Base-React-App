import React, {useState} from "react";


export default function Card({rank, suit, cardImg, bgImg}) {
    return (
    <div className="card" style={{width: "18rem"}}>
    <img
      src={cardImg}
      className="card-img-top"
      alt="..."
    />
  </div>)
}