import React from "react";

function GifInfo (props) {
    console.log(`props: ${props}`);
    return (
        <div className='gif-data'>
        <img src={props.gif} />
        </div>
    )
    
}

export default GifInfo