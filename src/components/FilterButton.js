import React, { useState } from "react"

const FilterButton = ({ name, filter, removeFilter }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    !active ? filter() : removeFilter()
  }

  return (
    <button
      className='filter-button'
      onClick={() => handleClick()}
      style={
        active
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "#1E1E1E", color: "white" }
      }
    >
      <h4>{name}</h4>
    </button>
  )
}

export default FilterButton
