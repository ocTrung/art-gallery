import React, { useState, useEffect } from 'react'
import Card from './Card'

const Results = ({ currArtsInfo, totalResults }) => {
  return (
    <div id='resultsContainer' className='flex flex-col'>
      { currArtsInfo.length !== 0 && <p className='text-stone-400 text-sm'>{ totalResults } results</p> }
      
      <div id='imagesContainer' className='flex flex-row flex-wrap'>
        { currArtsInfo.map((artInfo, index) => <Card key={ artInfo.objectID } artInfo={ artInfo } index={ index }/>) }
      </div>
    </div>
  )
}

export default Results