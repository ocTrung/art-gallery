import React, { useContext } from 'react'
import { searchArt } from '../api/utils'
import { SearchContext } from './SearchContext'

const Search = () => {
  const [searchResults, setSearchResults] = useContext(SearchContext)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log('search results received')
        setSearchResults(data)
      })
  }

  return (
    <div>
      <form onSubmit={ handleSearchSubmit }>
        <div>
          <input type='text' id='searchInput' placeholder='search art.' className='text-4xl dark:bg-neutral-600 focus:bg-neutral-500 outline-none w-screen mb-2' />
          <label htmlFor='searchInput'></label>
        </div>
      </form>
    </div>
  )
}

export default Search