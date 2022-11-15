import React from "react"
import { Link } from "react-router-dom"
import DiscoverIcon from "../assets/DiscoverIcon.svg"
import HomeIcon from "../assets/HomeIcon.svg"

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <h3 className='navigation-header'>Movies</h3>
      <div className='navigation-links'>
        <div>
          <img src={HomeIcon} alt='Home icon' />
          <Link to='/'>Home</Link>
        </div>
        <div>
          <img src={DiscoverIcon} alt='Discover icon' />
          <Link to='/discover'>Discover</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
