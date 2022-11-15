import React from 'react'
import Navigation from '../components/Navigation'
import Searchbar from '../components/Searchbar'

const Home = () => {
  return (
    <div className='home'>
        <Navigation />
        <div className='home-container'>
            <Searchbar />
        </div>
    </div>
  )
}

export default Home