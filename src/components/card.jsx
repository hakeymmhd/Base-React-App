import React, {useState} from "react";


export default function Card({rank, suit, cardImage, backgroundImage}) {
    const [cardState, setCardState] = useState(backgroundImage);
            
    return (
    <div className="card">
    <img
      src={cardState}
      className="card-img-top"
      alt=""
    />
    <h1>test</h1>
  </div>)
}