import React, { useReducer } from 'react';

const countReducer=(state,action)=>{
  switch(action.type){
    case 'CHANGE': 
      return state + action.payload;
    case 'SET':
      return action.payload;
    default: 
      return state
  }
}

function CounterHooks() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer,{count:0,clickCount:0});

  return (
    <section>
      <h2>Count:{count}</h2>
      <button onClick={()=>dispatch({type:'CHANGE',payload:1})}>+</button>
      <button onClick={()=>dispatch({type: 'CHANGE',payload:-1})}>-</button>
      <button onClick={()=>dispatch({type:'SET', payload:0})}>Reset</button>
    </section>
  );
}

export default CounterHooks;