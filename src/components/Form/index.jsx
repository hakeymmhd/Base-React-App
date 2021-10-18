import React, {useState, useRef} from "react";

function Form(props) {
  const [products, setProducts] = useState({name: '', price: ''});
  const itemName = useRef();
  const itemPrice = useRef();

  const handleClick = () => {
    console.log("clicked!");
      setProducts({
        name: itemName.current.value,
        price: itemPrice.current.value,
      })
   console.log(products);
  }

  return (
    <div className="Form">
      <h2>Form goes here</h2>
      <input type="text" placeholder="product name" ref={itemName} />
      <input type="text" placeholder="price" ref={itemPrice} />
      <input type="submit" onClick={handleClick} />
    </div>
  );
}

export default Form;
