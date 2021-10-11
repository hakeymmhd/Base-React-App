import React, {useState} from "react";
import "./styles.css";
import ImageData from "./imageData";

export default function App(img, city) {
  const initial = {
    img: ImageData[0].img,
    city: ImageData[0].city,
  }
  const [imageState, setImageState] = useState(initial);
  console.log(imageState.city)
  const arr = ImageData.map((record, index) => {
    return (
    <>
    <img onClick = {() => setImageState({img: record.img, city: record.city})}
    src={record.img}
    className="thumb"
    alt={record.city}
    />
    </>)
  });


  console.log(imageState.city)
  const bigImage =
      <img 
      src={imageState.img}
      id="bigimage"
      alt={imageState.city}
      />


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
        {bigImage}
        </div>
     
    </div>
  );
}
