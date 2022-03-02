import React, { useState } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import Navbar from './components/Navbar'
import { SearchProvider } from './components/SearchContext'
import { PageProvider } from './components/PageContext'
import { Outlet } from 'react-router-dom'

function App() {
  const [showSearchBox, setShowSearchBox] = useState(false)
  
  const handleShowSearchClick = () => {
    setShowSearchBox(!showSearchBox)
  }

  return (
    <div className='App'>
      <SearchProvider>
        <Navbar handleShowSearchClick={ handleShowSearchClick } showSearchBox={ showSearchBox }/>
        { showSearchBox && <Search /> }
        <PageProvider>
          <Outlet />
        </PageProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
