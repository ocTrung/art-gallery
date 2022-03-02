import React from 'react'

const Card = ({ artInfo, index }) => {
  const { title, primaryImageSmall, creditLine } = artInfo
  return (
    <div className=' w-screen md:w-80 m-2 bg-stone-200 dark:bg-neutral-700 flex flex-col justify-between p-3 items-start rounded-lg'>
      <img className='md:h-72 self-center' src={ primaryImageSmall } alt={ title }></img>
      <div>
        <h1 className='text-stone-300'>{ title }</h1>
        <p className='text-stone-400'>{ creditLine }</p>
      </div>
    </div>
  )
}

export default Card