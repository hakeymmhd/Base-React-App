import React, {useState, useEffect} from "react";
import "./styles.css";
import ColoredDiv from './ColoredDiv'

export default function App() {
  const [colors, setColors] = useState(['lightgreen', 'pink', 'lightblue'])
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
}, []) 

// console.log(width)
  const colorsArr = colors.map( (d,i) => {
    return (
    <ColoredDiv color={d} key={i} index={i}/>)
  })
  
let style2 = {flexDirection: (width > 1023 ? "row" : "column")}

  return (
    <div className="App">
    <h1>Current Window Width: {width}</h1>
    <div className='colored-divs' style={styles}>
      {colorsArr}
    </div>
    <button>Add New Color</button>
  </div>
  );
}
