import React, { useState, useEffect } from 'react'
import Card from './Card'

const Results = ({ currArtsInfo, totalResults }) => {
  return (
    <div id='resultsContainer' className='flex flex-col'>
      <div id='imagesContainer' className='flex flex-row flex-wrap'>
        {/* { currArtsInfo.map(artInfo => <img className=' max-w-xs md:max-w-sm mb-4' key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) } */}
        { currArtsInfo.map((artInfo, index) => <Card key={ artInfo.objectID } artInfo={ artInfo } index={ index }/>) }
      </div>
      total results: { totalResults }
    </div>
  )
}

export default Results