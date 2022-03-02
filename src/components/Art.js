import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageContext } from './PageContext'
import { getSingleArtworkInfo } from '../api/utils'

const Art = () => {
  const params = useParams()
  const [artData, setArtData] = useState(null)

  useEffect(() => {
    getSingleArtworkInfo(params.artID)
      .then(data => setArtData(data))
  }, [setArtData, params.artID])

  console.log(artData)

  if (artData === null) {
    return null
  } else {
    return (
      <div className='flex flex-row mt-2'>
        <img src={artData.primaryImageSmall} alt={artData.title}></img>
        <div className='artInfo mx-2 px-4'>
          <h1 className='text-stone-400'>{artData.title}</h1>
          <p>{artData.creditLine}</p>
          <p>{artData.dimensions}</p>
        </div>
      </div>
    )
  }
  
}

export default Art