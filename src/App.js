import React, { useState, useEffect } from 'react'
import {Search} from './components/Search'
import { searchArt } from './api/utils'

function App() {
  const [query, setQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])

  const handleSearchClick = () => {
    searchArt(query)
      .then(res => setQueryResults(res.objectIDs))
  }

  const getPage = (data, limit, offset) => {
    const start = offset
    const end = start + limit

    return data.slice(start, end)
  }

  return (
    <div className="App">
      <Search handleSearchClick={handleSearchClick} setQuery={setQuery}/>
      {getPage(queryResults, 10, 0).map(key => <p key={key}>{key}</p>)}
    </div>
  );
}

export default App;
