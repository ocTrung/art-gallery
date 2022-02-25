import React, { useState, useEffect } from 'react'
import { searchArt } from './api/utils'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [queryResults, setQueryResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log(data)
        setQueryResults(data)
      })
  }

  return (
    <div className="App">
      <Search handleSubmit={ handleSubmit }/>
      <Results queryResults={queryResults} />
    </div>
  );
}

export default App;
