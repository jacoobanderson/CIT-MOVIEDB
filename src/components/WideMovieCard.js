import React from "react"

const WideMovieCard = ({ image, title, year }) => {
  return (
    <div>
      <div
        className='wide-movie-card'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='wide-movie-card-text'>
          <h4>{title}</h4>
          <p>{year}</p>
        </div>
      </div>
    </div>
  )
}

export default WideMovieCard
