import React, { useEffect, useState } from "react"
import FilterButton from "../components/FilterButton"
import MovieCard from "../components/MovieCard"
import Navigation from "../components/Navigation"
import Searchbar from "../components/Searchbar"

const Discover = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  const fetchPopularMovies = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
    const popularMoviesJson = await response.json()

    setPopularMovies(popularMoviesJson)
    setFilteredMovies(popularMoviesJson.results)
  }

  const filterMoviesByRating = () => {
    const filtered = [...popularMovies.results]
    filtered.sort((a, b) => b.vote_average - a.vote_average)
    setFilteredMovies(filtered)
  }

  const removeFilter = () => {
    setFilteredMovies(popularMovies.results)
  }

  useEffect(() => {
    fetchPopularMovies()
  }, [])
  return (
    <div className='discover'>
      <Navigation />
      <div className='discover-container'>
        <Searchbar />
        <h2>Discover</h2>
        <div className='filter-button-container'>
          <FilterButton filter={filterMoviesByRating} removeFilter={removeFilter} name='Filter by rating' />
        </div>
        <div className='discover-movie-container'>
          {filteredMovies
            ? filteredMovies.map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie.title}
                  image={
                    process.env.REACT_APP_API_IMAGE_URL + movie.poster_path
                  }
                  rating={movie.vote_average}
                  year={movie.release_date.split("-")[0]}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default Discover
