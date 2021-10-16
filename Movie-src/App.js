import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import MovieInfo from './MovieInfo';




function App() {
  const [movieData, setMovieData] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (title) => {
    console.log('App - handleSubmit - title', title);
    setMovieTitle(title);
  };

  useEffect(async()=>{
    const someUrl=`http://www.omdbapi.com/?apikey=98e3fb1f&t=${movieTitle}`
    const res=await fetch(someUrl)
    const data=await res.json()
    setMovieData(data)

    // fetch(someUrl)
    //  .then(res => res.json())
    //  .then(data => {
    //   setMovieData(data)
    //  })
  },[movieTitle])

  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form handleSubmit={handleSubmit} />
      <MovieInfo movie={movieData} />
    </div>
  );
}

export default App;
