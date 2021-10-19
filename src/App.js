// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings/index';
import MyShoppingCart from './components/MyShoppingCart/index';
import Form from './components/Form/index';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

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


  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      {/* <Form products={products} handleClick={addToCart}/> */}
      <Form />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart}/>
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
