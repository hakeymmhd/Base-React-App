import React  from "react";
import "./App.css";
import Counter from './components/Counter'
// import IncrementCounter from './components/IncrementCounter'

export default function App() {
  return (
    <div className="App">
      <Counter />
      {/* <IncrementCounter/> */}
    </div>
  );
}
