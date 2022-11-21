import React from "react"
import SearchIcon from "../assets/SearchIcon.svg"

const Searchbar = () => {
  return (
    <div className='search-container'>
      <img src={SearchIcon} alt='Search icon' />
      <input type='text' placeholder='Search move titles' />
    </div>
  )
}

export default Searchbar
