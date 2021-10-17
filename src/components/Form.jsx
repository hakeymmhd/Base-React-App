import React, { useState } from 'react';

function Form(props) {
  const [gifTitle, setGifTitle] = useState('');

  const handleSubmit = (e) => {
    console.log('Form - handleSubmit - gifData', gifTitle);
    e.preventDefault();
    props.handleSubmit(gifTitle);
    setGifTitle('');
  };

  const handleChange = (e) => {
    console.log('handleChange clicked');
    const title = e.target.value;
    setGifTitle(title);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=".gif-row">
        <label htmlFor="gifTitle">Find:</label>
        <input
          id="gif-title"
          type="text"
          value={gifTitle}
          placeholder="type of giphy"
          onChange={handleChange}
        />
        <input type="submit" value="Find Gif" />
        
      </form>
    </>
  );
}

export default Form;
