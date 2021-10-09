import React, {useState} from "react";


export default function Card({rank, suit, cardImage, backgroundImage}) {
    const [cardState, setCardState] = useState(backgroundImage);
            
    return (
    <>
    <img onClick={()=> setCardState(cardImage)}
      src={cardState}

      alt=""
    />
  </>)
}