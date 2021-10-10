import React, {useState} from "react";
import "./styles.css";
import ImageData from "./imageData";

export default function App(img, city) {
  const arr = ImageData.map((record, index) => {
    return (
    <>
    <img
    src={record.img}
    className="thumb"
    alt={record.city}
    />
    </>)
  });

  return (
    <div className="App">
      <h1>Cities of The World</h1> 
        <div id="wrapper">
          <div id="thumbnails">
             {/* RENDER THE IMAGES ARRAY  */}
          {arr}
          </div>
          {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        </div>
     
    </div>
  );
}
