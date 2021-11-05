import React from "react";
import MovieList from "./MovieList"
import { Link } from "react-router-dom";
// import Search from "./SearchMovie";

export default function Results(props) {

    // console.log(MovieList[0].show);
    const list = MovieList.map((record, index) => {
        return (
        
             <img src={record.show.image.medium} />
            
         
        )
      })

    return (
        <div>
        {/* <Link to="/home"><button type="submit" onClick={() =>{props.flagCallback(false)}}>Search Again</button></Link> */}
        <button type="submit" onClick={() => {props.flagCallback(false)}}>Search Again</button>
            <div>
                {list}
            </div>
        </div>
    )
}