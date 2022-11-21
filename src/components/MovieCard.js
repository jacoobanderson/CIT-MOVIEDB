import React from "react"

const MovieCard = ({ title, image, year, rating }) => {
  return (
    <div className='movie-card-container'>
      <div className='movie-card' style={{ backgroundImage: `url(${image})` }}>
        {" "}
        <div className='movie-card-layer'>
            <div>{title}</div>
            <div>{year}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
