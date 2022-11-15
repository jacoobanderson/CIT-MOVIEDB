import React from 'react'

const MovieCard = ({ title, image, year, rating}) => {
  return (
    <div>
    <div className='movie-card' style={{ backgroundImage: `url(${image})` }}>
    </div>
    <h1>{rating}</h1>
  </div>
  )
}

export default MovieCard