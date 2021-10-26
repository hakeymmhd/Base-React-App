import React, { useState, useReducer } from 'react';


const ACTIONS = {
  addItem: "ADD-NAME",
}

function reducer (state, action) {
  switch (action.type) {
    case ACTIONS.addItem:
      return [...state, newItem(action.payload)]
  }
}

function newItem(item) {
  return {name: item.name, price: item.price, description: item.description}
}

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, [{name: '', price: 0, description: ''}])
  const [product, setProduct] = useState({ name: '', price: '' });
  console.log('product - ', product);

const handleSubmit = () => {
  props.handleSubmit(product);
  console.log('handleSubmit');
  setProduct({ name: '', price: '', description: '' });
};

const handleChange = (e) => {
  e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  dispatch({ type: ACTIONS.addItem, payload: { name, value }}); 
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
          // value={itemName}
          type="text"
          className="form-control"
          name="name"
          placeholder="product name"
        />
        <input
          onChange={handleChange}
          // value={itemPrice}
          type="text"
          className="form-control"
          name="price"
          placeholder="price"
        />
          <input
          onChange={handleChange}
          // value={itemDescription}
          type="text"
          className="form-control"
          name="description"
          placeholder="description"
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
