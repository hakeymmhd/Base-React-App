import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function LeftGreatGrandChild() {

  const dataContext = useContext(DataContext);
  return (
    
    
        <div style={dataContext}>
          <p>Left Great Grandchild</p>
        </div>
   
      
    
  );
}
