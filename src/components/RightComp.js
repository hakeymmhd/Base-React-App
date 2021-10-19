import React from "react";
import RightChild from './RightChild'

export default function RightComp(props) {

  return (
    <div>
      Right Component
      <RightChild {...props}/>
    </div>
  );
}
