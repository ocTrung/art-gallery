import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import { searchArt } from './api/utils'

function App() {
  const [queryResults, setQueryResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log(data)
        setQueryResults(data.objectIDs)
      })
  }

  const getPage = (data, limit, offset) => {
    const start = offset
    const end = start + limit

    return data.slice(start, end)
  }

  return (
    <div className="App">
      <Search handleSubmit={ handleSubmit }/>
      {getPage(queryResults, 10, 0).map(artId => <p key={artId}>{artId}</p>)}

    </div>
  );
}

export default App;
