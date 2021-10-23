import React, { useState } from 'react';
import Home from '../Home/Home';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Currencies from '../Currencies/Currencies';

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = price => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <main>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/currencies'>
          <Currencies />
        </Route>

        <Route path='/home'>  
        <Redirect to='/'/>
        </Route>
        <Route path='/home'>
        <Redirect to='/'/>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
