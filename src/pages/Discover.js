import React from 'react'
import Navigation from '../components/Navigation'
import Searchbar from '../components/Searchbar'

const Discover = () => {
  return (
    <div className='discover'>
        <Navigation />
        <div className='discover-container'>
            <Searchbar />
            <h2>Discover</h2>
        </div>
    </div>
  )
}

export default Discover