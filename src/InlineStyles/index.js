import React from 'react';
import {white, primary, secondary, warning, success } from '../colors'
 
const buttonStyles = {
  backgroundColor: primary,
  color: "#fff",
  padding: "7px 14px",
  margin: "0 5px",
  borderRadius: "5px",
  border: "1px solid transparent",
};

export default function InlineStyle(props) {
  
 

  return (
    <div>
      <h2>Inline Styles</h2>
      <button style={buttonStyles}>Default</button>
      <button style={buttonStyles}>Primary</button>
      <button style={{...buttonStyles, backgroundColor: secondary}}>Secondary</button>
      <button style={{...buttonStyles, backgroundColor: success}}>Success</button>
    </div>
  );
}
