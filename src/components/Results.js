import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { getManyArtworkInfo } from '../api/utils'
import { SearchContext } from './SearchContext'
import { PageContext } from './PageContext'
import PageControls from './PageControls'
import { Link, Outlet } from 'react-router-dom'

const Results = () => {
  const [searchResults, setSearchResults] = useContext(SearchContext)
  const [currPageNum, setCurrPageNum, currArtsInfo, setCurrArtsInfo] = useContext(PageContext)
  const [pageLimit, setPageLimit] = useState(10)

  let totalResults = searchResults === null ? null : searchResults.total

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
      return
    } 
    
    const { objectIDs } = searchResults
    const newPageIDs = getPage(objectIDs, pageLimit, currPageNum)

    // limits amount of API calls to 10
    if (newPageIDs.length > 10) {
      return 
    }

    getManyArtworkInfo(newPageIDs)
      .then(data => {
        console.log('art data retrieved')
        return data.map(({objectID, creditLine, primaryImageSmall, primaryImage, title, dimensions}) => {
          return {
            objectID,
            creditLine,
            primaryImageSmall,
            primaryImage,
            title,
            dimensions
          }
        })
      })
      .then((ArtsInfo) => setCurrArtsInfo(ArtsInfo))
  }

  useEffect(effect, [searchResults, pageLimit, currPageNum, setCurrArtsInfo])
  
  const newSearchEffect = () => {
    setCurrPageNum(0)
  }

  useEffect(newSearchEffect, [searchResults])

  if (totalResults === 0) {
    return <p className='text-red-400'>No Results</p>
  } else {
    return (
      <div>
        <Outlet />
        <div id='resultsContainer' className='flex flex-col'>
          { currArtsInfo.length !== 0 && <p className='text-stone-400 text-sm'>{ totalResults } results</p> }
          
          <div id='imagesContainer' className='flex flex-row flex-wrap'>
            { currArtsInfo.map((artInfo, index) => (
              <Link to={`/${artInfo.objectID}`} key={ artInfo.objectID } >
                <Card artInfo={ artInfo } index={ index }/>
              </Link>
            )) }
          </div>
        </div>
        <PageControls />
      </div>
    )
  }
}

export default Results