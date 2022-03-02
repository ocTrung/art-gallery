import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageContext } from './PageContext'
import { getSingleArtworkInfo } from '../api/utils'

const Art = () => {
  const state = useContext(PageContext)
  const currArtsInfo = state[2]
  const params = useParams()
  const [artData, setArtData] = useState(currArtsInfo.find(a => a.objectID === parseInt(params.artID, 10)))

  // Art Properties
  // objectID,
  // creditLine,
  // smallImageURL: primaryImageSmall,
  // imageURL: primaryImage,
  // title,
  // dimensions

  // console.log(currArtsInfo)
  // console.log(art)
  console.log('params', params.artID)

  useEffect(() => {
    if (artData === undefined) {
      getSingleArtworkInfo(params.artID)
      .then(data => setArtData(data))
    }
  }, [])

  if (artData === undefined) {
    return null
  } else {
    return (
      <div className='flex flex-row mt-2'>
        <img src={artData.primaryImageSmall} alt={artData.title}></img>
        <div className='mx-2 px-4'>
          <h1 className='text-stone-400'>{artData.title}</h1>
          <p>{artData.creditLine}</p>
          <p>{artData.dimensions}</p>
        </div>
      </div>
    )
  }
  
}

export default Art