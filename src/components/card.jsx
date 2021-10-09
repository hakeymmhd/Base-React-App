import React, {useState} from "react";


export default function Card({rank, suit, cardImg, bgImg}) {
    const hello = useState(cardImg);
            
    return (
    <div className="card">
    <img
      src={hello}
      className="card-img-top"
      alt="..."
    />
    <h1>test</h1>
  </div>)
}