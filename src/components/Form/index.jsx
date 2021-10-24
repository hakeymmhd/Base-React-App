import React, {useState, useRef} from "react";
import AllTheThings from '../AllTheThings/index.jsx';
import productsArr from '../../products';
import MyShoppingCart from '../MyShoppingCart/index';

function Form(props) {
  const [item, setItem] = useState({name: '', price: 0, description: ''});
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

  console.log(item);
  const handleSubmit = () => {
    // props.handleClick(item);
    console.log("clicked!");
    // console.log(itemPrice.current.value)
    //   setItem([
    //     {
    //       name: `${itemName.current.value}`,
    //       price: itemPrice.current.value,
    //       description: "test"
    //   }, ...item])
    props.addToList([item, ...props.list])
  }

  const handleNameChange = (e) => {
    console.log(e.target);
    setItem({...item, name: `${e.target.value}`})
  }

  const handlePriceChange = (e) => {
    console.log(e.target.value);
    setItem({...item, price: e.target.value})
  }

  const handleDescChange = (e) => {
    console.log(e.target.value);
    setItem({...item, description: e.target.value})
  }

  function onNameBlur() {

  }

  function onPriceBlur() {

  }

  function onDescBlur() {

  }

  return (
    <div>
      <div className="wrapper">
        <h2>Controlled Form </h2>
        <input type="text" name='name' placeholder="product name" onChange={handleNameChange} onBlur={onNameBlur} />
        <input type="text" name='price' placeholder="price" onChange={handlePriceChange} onBlur={onPriceBlur} />
        <input type="text" name='description' placeholder="description" onChange={handleDescChange} onBlur={onDescBlur} />
        <input type="submit" onClick={handleSubmit} />
      </div>
    
      
      {/* <div className="item">
        <div className="AllTheThings">
          <AllTheThings item={item} handleClick={addToCart}/>
        </div>
        <div className="MyShoppingCart">
          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
        </div>      
      </div> */}
    </div>
  );
}

export default Form;
