import React, { useState } from "react"

const FilterButton = ({ name }) => {
  const [active, setActive] = useState(false)

  return (
    <button className='filter-button' onClick={() => setActive(!active)} style={active ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: '#1E1E1E', color: 'white' }}>
      <h4>{name}</h4>
    </button>
  )
}

export default FilterButton
