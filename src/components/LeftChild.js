import React from "react";
import LeftGrandChild from './LeftGrandChild'
import DataContext from "../Context/DataContext";

export default function LeftChild(props) {

  return (
    <div>
      <p style={props.theme}>Left Child</p>
      <LeftGrandChild {...props}/>
    </div>
  );
}
