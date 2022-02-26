import React from 'react'

const Search = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <input type='text' id='searchInput' placeholder='search fart.' className='text-4xl dark:bg-neutral-600 focus:bg-neutral-500 outline-none w-screen mb-2' />
          <label htmlFor='searchInput'></label>
        </div>
      </form>
    </div>
  )
}

export default Search