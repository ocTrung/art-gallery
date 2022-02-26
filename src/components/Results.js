import React, { useState, useEffect } from 'react'

const Results = ({ currArtsInfo }) => {
  return (
    <div id='container' className='flex flex-row justify-end'>
      <div className='md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit'>
        { currArtsInfo.map(artInfo => <img className=' max-w-xs md:max-w-sm mb-4' key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) }
      </div>
      {/* total results: { total } */}
    </div>
  )
}

export default Results