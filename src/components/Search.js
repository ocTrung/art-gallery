import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchArt } from '../api/utils'
import { SearchContext } from './SearchContext'

const Search = () => {
  const [searchResults, setSearchResults] = useContext(SearchContext)
  let navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log('search results received')
        setSearchResults(data)
        navigate('/results')
      })
  }

  return (
    <div>
      <form onSubmit={ handleSearchSubmit }>
        <div className='dark:bg-neutral-900'>
          <input autoFocus type='text' id='searchInput' placeholder='search art...' className='ml-20 text-4xl text dark:bg-neutral-800 focus:bg-neutral-700 text-orange-400 outline-none w-2/3 lg:w-128  mb-2 rounded-lg' />
          <label htmlFor='searchInput'></label>
        </div>
      </form>
    </div>
  )
}

export default Search