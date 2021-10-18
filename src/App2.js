import React, { useRef, useState } from 'react';
import './styles.css';
import AllTheThings from './Components/AllTheThings/index';
import MyShoppingCart from './Components/MyShoppingCart/index';
import productsArr from './products';
import Form from './Components/Form/index';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({name: '', price: '', desc: ''});

  const inputName = useRef();
  const inputPrice = useRef();
  const inputDesc = useRef();

  const addToCart = item => {
    setCart( [...cart, item] )
  };

  const removeFromCart = index => {
    const cartArr = cart.filter( (d,i) => i !== index )
    setCart(cartArr)
  };

  console.log(item);
  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
          <Form inputName={inputName} inputPrice={inputPrice} inputDesc={inputDesc} />      
      <div className="products">
          <AllTheThings products={products} handleClick={addToCart} />

          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
