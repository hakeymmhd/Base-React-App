import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "./components/Form";
import GitInfo from "./components/GifInfo"


export default function App() {
  const [gifData, setGifData] = useState([]);
  const [gifTitle, setGifTitle] = useState('hello');

  const handleSubmit = (title) => {
    console.log(`APP: Form - handleSubmit - gifData:${title}`);
    setGifTitle(title);
  };
  console.log(gifTitle);
  useEffect(() => {
    async function fetchData () {
 
      const baseURL = 'https://api.giphy.com/v1/gifs/search';
      const apiKey = '03nXj96X2ubPEFL47yCazrDAFSm6d0UQ';
      const queryType = 'q=';
      const limit = 5;
      const queryURL = `${baseURL}?api_key=${apiKey}&${queryType}${gifTitle}}&limit=${limit}&offset=0&rating=g&lang=en`; 
    
      const res = await fetch(queryURL);
      const data = await res.json();
      setGifData(data.data[limit-1].images.original.url);
  
      // fetch(queryURL)
      // .then(res => res.json())
      // .then(data => {setGifData(data.data[2].images.original.url)})
      // console.log(queryURL);
      console.log(queryURL); 
    }
    fetchData();
  } ,[gifTitle])
  
  async function fetchRandom () {
    const URL = 'https://api.giphy.com/v1/gifs/random?api_key=03nXj96X2ubPEFL47yCazrDAFSm6d0UQ&tag=&rating=r';

    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setGifData(data.data.images.downsized_large.url);
  }

  return (
    <div className="App"> 
      <h1>Giphy</h1> 
      <Form handleSubmit={handleSubmit} />
      <input type="submit"
        onClick={fetchRandom} 
        value="Make API Call Again" />
      <GitInfo gif={gifData} />
    </div>
  );
}
