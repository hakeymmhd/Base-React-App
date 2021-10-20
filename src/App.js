// import useState
import React, { useState, useRef } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings/index';
import MyShoppingCart from './components/MyShoppingCart/index';
// import Form from './components/Form/index';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const itemName = useRef();
  const itemPrice = useRef();
  const itemDesc = useRef();

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

    const addToCart = item => {
        setCart( [...cart, item] )
    };
  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

    const removeFromCart = index => {
        const cartArr = cart.filter( (d,i) => i !== index )
        setCart(cartArr)
    };

    const handleSubmit = () => {
      // console.log("clicked!");
      // console.log(itemPrice.current.value)
        setProducts([
          {
            name: `${itemName.current.value}`,
            price: itemPrice.current.value,
            description: `${itemDesc.current.value}`
        }, ...products])}

    // console.log("app log: " + products);
  return (
    <div className="App">
      <h1>Big Time Shopping</h1>  
      <div className="wrapper">
        <div className="form-signin">
        <h2 class="form-signin-heading">Form goes here</h2>
          <input type="text" ref={itemName} placeholder="product name" />
          <input type="text" ref={itemPrice} placeholder="price" />
          <input type="text" ref={itemDesc} placeholder="description" />
          <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit}>Submit</button>
        </div>
        
      </div>
    
      <div className="products">
        <div className="AllTheThings">
          <AllTheThings products={products} handleClick={addToCart}/>
        </div>
        <div className="MyShoppingCart">
          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
        </div>      
      </div>


      {/* <Form products={products} handleClick={addToCart}/> */}
      {/* <Form /> */}
      {/* <div className="products"> */}
        {/* <AllTheThings products={products} handleClick={addToCart}/> */}
        {/* <MyShoppingCart cart={cart} handleClick={removeFromCart} /> */}
      {/* </div> */}
    </div>
  );
}
