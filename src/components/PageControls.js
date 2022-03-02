import React, { useContext } from 'react'
import { PageContext } from './PageContext'
import { SearchContext } from './SearchContext'

const PageControls = () => {
  const [currPageNum, setCurrPageNum] = useContext(PageContext)
  const [searchResults, setSearchResults] = useContext(SearchContext)

  const handleNextBtnClick = (currPage, totalResults, pageLimit) => {
    const maxPageForResults = Math.ceil(totalResults / pageLimit)
    const nexPage = currPage + 1 > maxPageForResults ? maxPageForResults : currPage + 1
    setCurrPageNum(nexPage)
  }

  const handlePrevBtnClick = (currPage) => {
    const prevPage = currPage - 1 < 0 ? 0 : currPage - 1
    setCurrPageNum(prevPage)
  }
  
  if (searchResults === null || searchResults.total === 0) {
    return null
  } else {
    return (
      <div className='mb-4'>
        {/* <p className='mx-2 text-stone-400'>page { currPageNum + 1 }</p> */}
        <div>
          <button className='mx-1 text-orange-300 text-lg' onClick={ () => handlePrevBtnClick(currPageNum) }>Previous</button>
          <button className='mx-1 text-orange-300 text-lg' onClick={ () => handleNextBtnClick(currPageNum) }>Next</button>
        </div>
      </div>
    )
  }
}

export default PageControls