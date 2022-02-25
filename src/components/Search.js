import React from 'react'

const Search = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <input type='text' id='searchInput' />
          <label htmlFor='searchInput'></label>
        </div>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search