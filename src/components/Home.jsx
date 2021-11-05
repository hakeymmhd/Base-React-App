import React, { useState } from "react";
import { Route } from "react-router";
import SearchMovie from "./SearchMovie.jsx";
import Results from "./Result";

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [search, setSearch] = useState("");

  const handleCallback = (childData) => {setSearch(childData)}
  const flagCallback = (childFlag) => {setHasSearched(childFlag)}
  console.log(search);
  console.log(hasSearched);
  return (
    <>
    { hasSearched ? <Results flagCallback = {flagCallback}/>  
      : <SearchMovie parentCallback = {handleCallback} flagCallback = {flagCallback} /> }
    {/* <h1>TVMaze React</h1> */}
    {/* <Route path="/searchmovie" component={SearchMovie} /> */}
      {/* { hasSearched ? <SearchMovie parentCallback = {handleCallback} flagCallback = {flagCallback} /> 
      : <Results flagCallback = {flagCallback}/>} */}
    {/* <Results /> */}
    </>
  );
}                                                                                                                                                                         