import React, { useState, useEffect } from 'react'
import { searchArt } from './api/utils'
import Search from './components/Search'
import Results from './components/Results'
import { getArtworksInfo } from './api/utils'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [currArtsInfo, setCurrArtsInfo] = useState([])
  const [currPageNum, setCurrPageNum] = useState(0)
  const [pageLimit, setPageLimit] = useState(10)
  const [totalResults, setTotalResults] = useState(0)
  
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
    console.log('useEffect ran')
    console.log('currPage', typeof(currPageNum), currPageNum)
    if (searchResults.length === 0) {
      return
    }
    const { objectIDs, total } = searchResults
    const newPageIDs = getPage(objectIDs, pageLimit, currPageNum)
    setTotalResults(total)

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

  useEffect(effect, [searchResults, pageLimit, currPageNum])

  const handleNextBtnClick = (currPage, totalResults, pageLimit) => {
    // console.log('currPage type:', typeof(currPage))
    const maxPageForResults = Math.ceil(totalResults / pageLimit)
    const nexPage = currPage + 1 > maxPageForResults ? maxPageForResults : currPage + 1
    // console.log('nextPage', nexPage)
    setCurrPageNum(nexPage)
  }

  const handlePrevBtnClick = (currPage) => {
    const prevPage = currPage - 1 < 0 ? 0 : currPage - 1
    setCurrPageNum(prevPage)
  }

  return (
    <div className="App" className=' bg-slate-400'>
      <Search handleSubmit={ handleSearchSubmit }/>
      <Results currArtsInfo={ currArtsInfo } totalResults={ totalResults } />
      page num: { currPageNum + 1 }
      <div>
        <button onClick={ () => handlePrevBtnClick(currPageNum) }>Previous</button>
        <button onClick={ () => handleNextBtnClick(currPageNum) }>Next</button>
      </div>
    </div>
  );
}

export default App;
