import React, { useState, useEffect } from 'react'
import Card from './Card'

const Results = ({ currArtsInfo, totalResults }) => {
  return (
    <div id='container' className='flex flex-col'>
      <div className='md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit'>
        {/* { currArtsInfo.map(artInfo => <img className=' max-w-xs md:max-w-sm mb-4' key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) } */}
        { currArtsInfo.map((artInfo, index) => <Card key={ artInfo.objectID } artInfo={ artInfo } index={ index }/>) }
      </div>
      total results: { totalResults }
    </div>
  )
}

export default Results