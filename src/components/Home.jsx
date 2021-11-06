import React, { useState } from "react";
// import { Route } from "react-router";
import SearchMovie from "./SearchMovie.jsx";
import Results from "./Result";

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const handleCallback = (childData) => {setSearch(childData)}
  const flagCallback = (childFlag) => {setHasSearched(childFlag)}
  console.log(search);
  console.log(hasSearched);
  console.log(movie);

  return (
    <>
    { hasSearched ? <Results movie={movie} parentCallback = {handleCallback} flagCallback = {flagCallback}/>  
      : <SearchMovie query={search} setMovie={setMovie} parentCallback = {handleCallback} flagCallback = {flagCallback} /> }

    </>
  );
}                                                                                                                                                                         