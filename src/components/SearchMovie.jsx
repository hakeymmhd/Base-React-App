import React, { useState } from "react";
import { Link } from "react-router-dom"


function Search(props) {

  console.log(props.query)
  const term= props.query.replace(/\s/, "+");
  const URL = "https://api.tvmaze.com/search/shows?q=" + term;

  const handleSubmit = () => {
      
      async function fetchMovie() {
          try {
              const response = await fetch(URL);
              const data = await response.json();
              props.setMovie(data);
              console.log(data);
          }
          catch(error) {
              console.log(error);
          }
       }
       fetchMovie();
       props.flagCallback(true)
  }

  return (
    <>
  
        <input type="text" placeholder="Enter a Movie Title" onChange={(e)=> {props.parentCallback(e.target.value); e.preventDefault();}}></input>
        <button type="submit" onClick={handleSubmit}>Search</button>
    </>
  );
}

export default Search