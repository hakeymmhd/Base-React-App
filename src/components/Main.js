import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"
import Stocks from "./stock-data"

function Main() {

  const [stock, setStock] = useState("");
  return (
    <main>
      {/* <Switch> */}
      <Route exact path="/" component={Home} >
        {/* <Dashboard /> */}
      </Route> 
      <Route path="/about" component={About} />
      
      <Route path="/stocks/:symbol" >
      {/* <Dashboard /> */}
      </Route>

      <Route path="/stocks" component={Dashboard} >
      {/* <Dashboard setStock={setStock}/> */}
      </Route>

      <Redirect to="/stocks" />
      {/* </Switch> */}
    </main>
  )
}

export default Main
