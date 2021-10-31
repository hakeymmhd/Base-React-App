import React from "react";
import { Link } from "react-router-dom"

function Search() {

  return (
    <>
    <input type="text" placeholder="Enter a Movie Title"></input>
    <Link to="/results"><button type="submit">Search</button></Link>
    </>
  );
}

export default Search