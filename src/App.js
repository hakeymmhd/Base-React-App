import React, {useState} from "react";
import "./styles.css";
import ImageData from "./imageData";

export default function App(img, city) {
  // const initial = {
  //   img: ImageData[0].img,
  //   city: ImageData[0].city,
  // }
  // const [imageState, setImageState] = useState(() => {return initial});      
  const [image, setImage] = useState(() => {
    console.log("run image");
    return ImageData[0].img} );       

  const [CT, setCity] = useState(() => {
    console.log("run city");
    return ImageData[0].city} );
    
  console.log(CT);          // why does this run twice?
  const arr = ImageData.map((record, index) => {
    return (
    <>
    <img onClick = {() => {
      setImage(record.img)
      setCity(record.city)
    }}
    src={record.img}
    className="thumb"
    alt={record.city}
    />
    </>)
  });

  const bigImage =
      <img 
      src={image}
      id="bigimage"
      alt={CT}
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
