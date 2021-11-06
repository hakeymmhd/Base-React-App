import React, { useState } from "react";
import MovieList from "./MovieList"
import { Link } from "react-router-dom";

export default function Results(props) {

    console.log(props.movie);

    const list = props.movie.map((record, index) => {
        console.log(props.movie.show.image.original);
        return (
             <img src={record.show.image.medium} key={index} />
        )
      })

    return (
        <div>
        <button type="submit" onClick={() => {props.flagCallback(false)}}>Search Again</button>
            <div>
                {list}
            </div>
        </div>
    )
}