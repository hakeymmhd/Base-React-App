import React from "react";
import "./styles.css";
import CounterHooks from "./Counterhook";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      {CounterHooks}
    </div>
  );
}
