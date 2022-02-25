import React, { useState, useEffect } from 'react'
import { getArtworksInfo as getArtworksInfo } from '../api/utils'

const Results = ({ queryResults }) => {
  const { total, objectIDs } = queryResults
  const [offset, setOffset] = useState(0)
  const [pageLimit, setPageLimit] = useState(10)
  const [currArtsInfo, setCurrArtsInfo] = useState([])

  const getPage = (data, limit, offset) => {
    const start = offset
    const end = start + limit

    return data.slice(start, end)
  }

  const effect = () => {
    if (queryResults.length !== 0) {
      const newPageIDs = getPage(objectIDs, pageLimit, offset)
      // So we arent making too many requests
      if (newPageIDs.length < 20) {
        getArtworksInfo(newPageIDs)
        .then(data => {
          console.log(data)
          const newCurrArtsInfo = data.map((artData => {
            return {
              objectID: artData.objectID,
              creditLine: artData.creditLine,
              smallImageURL: artData.primaryImageSmall,
              imageURL: artData.primaryImage,
              title: artData.title,
              dimensions: artData.dimensions
            }
          }))
          // console.log(pageImageURLs)
          setCurrArtsInfo(newCurrArtsInfo)
        })
      }
      
    }
  }

  useEffect(effect, [queryResults])

  return (
    <div>
      {/* { pageImageURLs.map(imageURL => <p key={artId}>{artId}</p>) } */}
      { currArtsInfo.map(artInfo => <img key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) }
      total results: { total }
    </div>
  )
}

export default Results