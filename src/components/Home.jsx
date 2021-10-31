import React from "react";
import { Route } from "react-router";
import SearchMovie from "./SearchMovie.jsx";
import Results from "./Result";

export default function Home() {

  return (
    <>
    {/* <h1>TVMaze React</h1> */}
    {/* <Route path="/searchmovie" component={SearchMovie} /> */}
    <SearchMovie />
    {/* <Results /> */}
    </>
  );
}                                                                                                                                                                         