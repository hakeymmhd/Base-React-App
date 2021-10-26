import React, { useReducer } from 'react';

const ACTIONS = {
  addName: "ADD-NAME",
  addPrice: "ADD-PRICE",
  addDesc: "ADD-DESCRIPTION",
  clearField: "CLEAR",
}

function reducer (state, action) {
  switch (action.type) {
    case ACTIONS.addName:
      console.log('REDUCER payload: ', action.payload)
      return state = {...state, name: action.payload.value};

    case ACTIONS.addPrice:
      return state = {...state, price: action.payload.value};

    case ACTIONS.addDesc:
      return state = {...state, description: action.payload.value};

    case ACTIONS.clearField:
      return state = {name: '', price: '', description: ''};
  }
}

function newItem(item) {
  return {name: item.name, price: item.price, description: item.description}
}

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, [{name: '', price: 0, description: ''}])
  // const [product, setProduct] = useState({ name: '', price: '' });
  // console.log('product - ', product);
  console.log('rstate:', state);
  const handleSubmit = () => {
    props.handleSubmit(state);
    
    dispatch({ type: ACTIONS.clearField});
    console.log('handleSubmit');
    // setProduct({ name: '', price: '', description: '' });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    
    if (name === "name") {
      dispatch({ type: ACTIONS.addName, payload: { name, value }}); 
      console.log(state)
    }
    
    else if (name === "price") {
      dispatch({ type: ACTIONS.addPrice, payload: { name, value }}); 
    }

    else if (name === "description") {
      dispatch({ type: ACTIONS.addDesc, payload: { name, value }}); 
    }
    
    
    console.log('handleChange - event', e.target.computedName);
    console.log('handleChange - value', e.target.value);
    console.log(`Payload name: ${name} Payload value: ${value}`);
    // setProduct({
    //   ...product,
    //   [name]: value
    // });
  };

  return (
    <div className="wrapper">
      <div className="form-signin">
        <h2 className="form-signin-heading">{props.title}</h2>
        <input
          onChange={handleChange}
          value={state.name}
          type="text"
          className="form-control"
          name="name"
          placeholder="product name"
        />
        <input
          onChange={handleChange}
          value={state.price}
          type="text"
          className="form-control"
          name="price"
          placeholder="price"
        />
          <input
          onChange={handleChange}
          value={state.description}
          type="text"
          className="form-control"
          name="description"
          placeholder="description"
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={() => {
            handleSubmit();
            
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
