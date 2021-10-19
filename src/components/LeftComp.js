import React from "react";
import LeftChild from './LeftChild'


export default function LeftComp(props) {

  return (
    <div>
      Left Component
      <LeftChild {...props}/>
    </div>
  );
}
