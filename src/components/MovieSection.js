import React from "react"
import MovieCard from "./MovieCard"

const MovieSection = ({ title, movies }) => {
  return (
    <div className='movie-section-container'>
      <div>
        <div className='movie-section-title'>
          <h3>{title}</h3>
        </div>
        <div className='movie-section-content'>
          {console.log(movies)}
          {movies.length > 0
            ? movies
                .slice(0, 5)
                .map((movie, index) => (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    image={
                      process.env.REACT_APP_API_IMAGE_URL + movie.poster_path
                    }
                    year={movie.release_date.split("-")[0]}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default MovieSection
