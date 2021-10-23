import React from "react";
import "./Currencies.css";
import listOfCurrencies from "./list.json";
import {Link} from 'react-router-dom'

function Currencies(props) {
    let list = listOfCurrencies.map(item => {
      return (
        <div className="currency" key={item.currency}>
          <p>
            <Link onClick={()=>props.setCurrency(item.currency)} to={"/price/" + item.currency}>{item.currency}</Link>:{" "}
            {item.country}
          </p>
        </div>
      );
    });

    return <div>{list}</div>;
  
}

export default Currencies;
