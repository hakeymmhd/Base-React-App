import React from "react";
import Header from "./Header"
import Main from "./Main"
import { Route, Link, Switch, Redirect } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App


