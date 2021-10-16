import React from 'react'

function MovieInfo(props){

  return (
    <div className='movie-data'>{props.movie.Title}</div>
  )
}

export default MovieInfo