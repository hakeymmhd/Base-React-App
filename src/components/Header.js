import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="nav">
      <div className="nav-item"><span className="nav-logo"><Link to="/">TVMaze</Link></span></div>
      <div className="nav-item"><Link to="/about">About</Link></div>
      <h1>TVMaze React</h1>
      {/* <SearchMovie /> */}
   </div>
  );
}

export default Header
