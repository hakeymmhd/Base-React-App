import React, {useState, useRef} from "react";

function Form() {
  const [items, setItems] = useState({name: '', price: 0});
  const itemName = useRef();
  const itemPrice = useRef();

  console.log(items);
  const handleSubmit = () => {
    console.log("clicked!");
    console.log(itemPrice.current.value)
      setItems({...items,
        name: `${itemName.current.value}`,
        price: itemPrice.current.value,
      })
      
  }
 
  return (
    <div className="Form">
      <h2>Form goes here</h2>
      <input type="text" ref={itemName} placeholder="product name" />
      <input type="text" ref={itemPrice} placeholder="price" />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}

export default Form;
