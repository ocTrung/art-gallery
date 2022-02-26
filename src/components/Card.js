import React from 'react'

const Card = ({ artInfo, index }) => {
  const { title, smallImageURL } = artInfo
  return (
    <div className=' w-80 m-2 bg-stone-200 dark:bg-stone-700 flex flex-col justify-between p-4 items-start'>
      <h1>{ title }</h1>
      <img src={ smallImageURL } alt={ title }></img>
      { index }
      {/* { currArtsInfo.map(artInfo => <img className=' max-w-xs md:max-w-sm mb-4' key={artInfo.objectID} src={artInfo.smallImageURL} alt={artInfo.title}></img>) } */}
    </div>
  )
}

export default Card