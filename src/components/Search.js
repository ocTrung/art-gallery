import React, { useState } from 'react'

export const Search = ({ handleSearchClick, setQuery }) => {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type='text' id='search-field' onChange={handleChange}></input>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  )
}