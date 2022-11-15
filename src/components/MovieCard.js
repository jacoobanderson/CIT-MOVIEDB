import React from 'react'

const MovieCard = ({ title, image, year}) => {
  return (
    <div>
    <div className='movie-card' style={{ backgroundImage: `url(${image})` }}>
    </div>
  </div>
  )
}

export default MovieCard