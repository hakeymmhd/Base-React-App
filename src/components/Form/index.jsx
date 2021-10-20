import React, {useState, useRef} from "react";
import AllTheThings from '../AllTheThings/index.jsx';
import productsArr from '../../products';
import MyShoppingCart from '../MyShoppingCart/index';

function Form(props) {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  
  const itemName = useRef();
  const itemPrice = useRef();


  const addToCart = item => {
    setCart( [...cart, item] )
  };

  const removeFromCart = index => {
    const cartArr = cart.filter( (d,i) => i !== index )
    setCart(cartArr)
  };

  console.log(products);
  const handleSubmit = () => {
    // props.handleClick(products);
    console.log("clicked!");
    console.log(itemPrice.current.value)
      setProducts([
        {
          name: `${itemName.current.value}`,
          price: itemPrice.current.value,
          description: "test"
      }, ...products])
      
  }
 
  return (
    <div>
      <div className="wrapper">
        <h2>Form goes here</h2>
        <input type="text" ref={itemName} placeholder="product name" />
        <input type="text" ref={itemPrice} placeholder="price" />
        <input type="submit" onClick={handleSubmit} />
      </div>
    
      
      <div className="products">
        <div className="AllTheThings">
          <AllTheThings products={products} handleClick={addToCart}/>
        </div>
        <div className="MyShoppingCart">
          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
        </div>      
      </div>
    </div>
  );
}

export default Form;
