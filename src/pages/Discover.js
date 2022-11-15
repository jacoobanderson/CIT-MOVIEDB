import React from 'react'
import FilterButton from '../components/FilterButton'
import Navigation from '../components/Navigation'
import Searchbar from '../components/Searchbar'

const Discover = () => {
  return (
    <div className='discover'>
        <Navigation />
        <div className='discover-container'>
            <Searchbar />
            <h2>Discover</h2>
            <div className='filter-button-container'>
                <FilterButton name='Filter by rating' />
            </div>
        </div>
    </div>
  )
}

export default Discover