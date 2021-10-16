// IMPORT useEffect
import React, {useState, useEffect} from "react";

const ColoredDiv = (props) => {
  const [width, setWidth] = useState(0);
  let x = 0;

  // SETUP useEffect
  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => {window.removeEventListener('resize', updateWidth)} 
}, []) 
// console.log(width)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  let styles = {
    background: props.color,
   // add conditional logic here
    flexDirection: (width > 1023 ? "row" : "column"),

    flex: (width > 1023 ? x=1 : x=0),
  }
  console.log(x)
  return (
    <>
      <div 
        style={styles}
        className="colored-div"
        >
        {props.color}
        <button>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv