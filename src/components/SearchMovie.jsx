import React, { useState } from "react";
import { Link } from "react-router-dom"

// import DataContext from "./DataContext";

function Search(props) {

  // const [search, setSearch] = useState("");


  // console.log(search);
  return (
    <>
  
        <input type="text" placeholder="Enter a Movie Title" onChange={(e)=> {props.parentCallback(e.target.value); e.preventDefault();}}></input>
        {/* <Link to="/results"><button type="submit" onClick={() => {props.flagCallback(true)}}>Search</button></Link> */}
        <button type="submit" onClick={() => {props.flagCallback(true)}}>Search</button>
    </>
  );
}

export default Search

// gotta render the results component here