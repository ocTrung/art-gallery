import React, { useState, useEffect } from 'react'
import { searchArt } from './api/utils'
import Search from './components/Search'
import Results from './components/Results'
import { getArtworksInfo } from './api/utils'

function App() {
  const [offset, setOffset] = useState(0)
  const [pageLimit, setPageLimit] = useState(10)
  const [searchResults, setSearchResults] = useState([])
  const [currArtsInfo, setCurrArtsInfo] = useState([])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log('search results received')
        setSearchResults(data)
      })
  }

  const getPage = (data, limit, offset) => {
    const start = offset
    const end = start + limit

    return data.slice(start, end)
  }

  const effect = () => {
    console.log('useEffect ran')

    if (searchResults.length === 0) {
      return
    }

    const { objectIDs } = searchResults
    const newPageIDs = getPage(objectIDs, pageLimit, offset)

    if (newPageIDs.length > 20) {
      return 
    }

    let newCurrArtsInfo = []

    getArtworksInfo(newPageIDs)
      .then(data => {
        console.log('art data retrieved')
        newCurrArtsInfo = data.map(artData => {
          return {
            objectID: artData.objectID,
            creditLine: artData.creditLine,
            smallImageURL: artData.primaryImageSmall,
            imageURL: artData.primaryImage,
            title: artData.title,
            dimensions: artData.dimensions
          }
        })
        setCurrArtsInfo(newCurrArtsInfo)
      })
  }

  useEffect(effect, [searchResults, pageLimit, offset])

  return (
    <div className="App">
      <Search handleSubmit={ handleSearchSubmit }/>
      <Results currArtsInfo={ currArtsInfo } />
    </div>
  );
}

export default App;
