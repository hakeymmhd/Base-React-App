import React, { useState } from 'react';
import Home from '../Home/Home';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Currencies from '../Currencies/Currencies';
import Currency from '../Currency';

function App(props) {
  const [currency, setCurrency] = useState("");
  return (
    <div>
      <nav>
        <Link onClick={()=>setCurrency("")} to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link onClick={()=>setCurrency("")} to="/currencies">{`Currencies > ${currency}`}</Link>
      </nav>
      <main>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/currencies'>
          <Currencies setCurrency={setCurrency}/>
        </Route>
        <Route path='/price/:currency'>
            <Currency/>
        </Route>
        <Redirect to='/'/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
