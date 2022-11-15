import React, { useEffect, useState } from "react"
import MovieSection from "../components/MovieSection"
import Navigation from "../components/Navigation"
import Searchbar from "../components/Searchbar"
import WideMovieCard from "../components/WideMovieCard"

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [playingMovies, setPlayingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

  const fetchTrendingMovies = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    )
    const trendingMoviesJson = await response.json()

    setTrendingMovies(trendingMoviesJson)
  }

  const fetchPlayingMovies = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
    const playingMoviesJson = await response.json()

    setPlayingMovies(playingMoviesJson)
  }

  useEffect(() => {
    fetchTrendingMovies()
    fetchPlayingMovies()
  }, [])

  return (
    <div className='home'>
      <Navigation />
      <div className='home-container'>
        <Searchbar />
        <div className='trending-container'>
          <div>
            <div className='trending-title-container'>
              <h3>Trending</h3>
            </div>
            <div className='trending-movies-container'>
              {trendingMovies.results ? (
                <WideMovieCard
                  title={trendingMovies.results[0].title}
                  image={
                    process.env.REACT_APP_API_IMAGE_URL +
                    trendingMovies.results[0].backdrop_path
                  }
                  year={trendingMovies.results[0].release_date.split("-")[0]}
                />
              ) : null}
              {trendingMovies.results ? (
                <WideMovieCard
                  title={trendingMovies.results[1].title}
                  image={
                    process.env.REACT_APP_API_IMAGE_URL +
                    trendingMovies.results[1].backdrop_path
                  }
                  year={trendingMovies.results[1].release_date.split("-")[0]}
                />
              ) : null}
            </div>
          </div>
        </div>
        {playingMovies.results ? <MovieSection title={'Now Playing'} movies={playingMovies.results}/> : null}
      </div>
    </div>
  )
}

export default Home
