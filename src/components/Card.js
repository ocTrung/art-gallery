import React from 'react'

const Card = ({ artInfo, index }) => {
  const { title, smallImageURL } = artInfo
  return (
    <div className='md:max-w-md md:min-w-min mb-4 bg-red-300'>
      <h1>{ title }</h1>
      <img src={ smallImageURL } alt={ title }></img>
      { index }
      {/* { currArtsInfo.map(artInfo => <img className=' max-w-xs md:max-w-sm mb-4' key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) } */}
    </div>
  )
}

export default Card