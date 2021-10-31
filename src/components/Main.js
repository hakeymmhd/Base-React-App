import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About";
import Results from "./Result.js";

// import Result from "./Result";

function Main() {

  // const [stock, setStock] = useState("");
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} >
        </Route> 


        <Route path="/about" component={About} />

        {/* <Route path="/home" component={Home} >
        </Route> */}
        
        <Route exact path="/results" component={Results} >
        </Route>

        <Redirect to="/" />
      </Switch>
    </main>
  )
}

export default Main
