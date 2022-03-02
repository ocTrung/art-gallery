import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { getManyArtworkInfo } from '../api/utils'
import { SearchContext } from './SearchContext'
import { PageContext } from './PageContext'

const Results = () => {
  const [searchResults, setSearchResults] = useContext(SearchContext)
  const [currPageNum, setCurrPageNum] = useContext(PageContext)
  const [emptyReturn, setEmptyReturn] = useState(false)
  const [pageLimit, setPageLimit] = useState(10)
  const [totalResults, setTotalResults] = useState(0)
  const [currArtsInfo, setCurrArtsInfo] = useState([])
  

  const getPage = (data, pageLimit, currPage) => {
    const start = currPage * pageLimit
    const end = start + pageLimit

    return data.slice(start, end)
  }

  const effect = () => {
    if (searchResults === null){
      return 
    }
    if (searchResults.total === 0) {
      setEmptyReturn(true)
      return
    } 
    
    setEmptyReturn(false)
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

  if (emptyReturn) {
    return <p>No Results</p>
  } else {
    return (
      <div id='resultsContainer' className='flex flex-col'>
        { currArtsInfo.length !== 0 && <p className='text-stone-400 text-sm'>{ totalResults } results</p> }
        
        <div id='imagesContainer' className='flex flex-row flex-wrap'>
          { currArtsInfo.map((artInfo, index) => <Card key={ artInfo.objectID } artInfo={ artInfo } index={ index }/>) }
        </div>
      </div>
    )
  }
}

export default Results