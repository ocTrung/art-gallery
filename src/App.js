import React, { useState, useEffect } from 'react'
import { searchArt } from './api/utils'
import Search from './components/Search'
import Results from './components/Results'
import { getManyArtworkInfo } from './api/utils'
import PageControls from './components/PageControls'
import Title from './components/Title'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [currArtsInfo, setCurrArtsInfo] = useState([])
  const [currPageNum, setCurrPageNum] = useState(0)
  const [pageLimit, setPageLimit] = useState(10)
  const [totalResults, setTotalResults] = useState(0)
  const [emptyReturn, setEmptyReturn] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)

  
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.searchInput.value
    searchArt(query)
      .then(data => {
        console.log('search results received')
        setSearchResults(data)
      })
  }

  const getPage = (data, pageLimit, currPage) => {
    const start = currPage * pageLimit
    const end = start + pageLimit

    return data.slice(start, end)
  }

  const effect = () => {
    if (searchResults.total === 0) {
      setEmptyReturn(true)
      return
    }
    if (searchResults.total === undefined) {
      return
    }
    
    setEmptyReturn(false)
    // console.log(searchResults)
    // if (searchResults.length === 0) {
    //   return
    // }
    const { objectIDs, total } = searchResults
    const newPageIDs = getPage(objectIDs, pageLimit, currPageNum)
    setTotalResults(total)

    if (newPageIDs.length > 20) {
      return 
    }

    let newCurrArtsInfo = []

    getManyArtworkInfo(newPageIDs)
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

  useEffect(effect, [searchResults, pageLimit, currPageNum])

  const newSearchEffect = () => {
    setCurrPageNum(0)
  }

  useEffect(newSearchEffect, [searchResults])

  const handleShowSearchClick = () => {
    setShowSearchBox(!showSearchBox)
  }

  return (
    <div className='App'>
      <Title handleShowSearchClick={ handleShowSearchClick } showSearchBox={ showSearchBox }/>
      { showSearchBox && <Search handleSubmit={ handleSearchSubmit }/> }
      { emptyReturn && 'no results' }
      <Results currArtsInfo={ currArtsInfo } totalResults={ totalResults } />
      { searchResults.total > 0 &&
        <PageControls currPageNum={ currPageNum } searchResults={ searchResults } setCurrPageNum={ setCurrPageNum } /> 
      }
    </div>
  );
}

export default App;
