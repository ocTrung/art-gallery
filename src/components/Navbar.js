import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ handleShowSearchClick, showSearchBox }) => {

  return (
    <div className='dark:bg-neutral-900 '>
      <Link to='/'><h1 className='mx-2 text-7xl pl-20'>Arty 🎨</h1></Link>
        <button className={`mx-2 pl-20 ${ showSearchBox ? 'text-neutral-400' : 'text-orange-400' }`} onClick={ handleShowSearchClick }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
    </div>
  )
}

export default Navbar