import React from "react";
import MovieList from "./MovieList"
import { Link } from "react-router-dom";

export default function Results() {

    // console.log(MovieList[0].show);
    const list = MovieList.map((record, index) => {
        return (
        
             <img src={record.show.image.medium} />
            
         
        )
      })

    return (
        <div>
        <Link to="/home"><button type="submit">Search Again</button></Link>
            <div>
                {list}
            </div>
        </div>
    )
}