import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import PageControls from './components/PageControls'
import Title from './components/Navbar'
import { SearchProvider } from './components/SearchContext'
import { PageProvider } from './components/PageContext'

function App() {
  // navbar
  const [showSearchBox, setShowSearchBox] = useState(false)
  
  const handleShowSearchClick = () => {
    setShowSearchBox(!showSearchBox)
  }

  return (
    <div className='App'>
      <SearchProvider>
        <Title handleShowSearchClick={ handleShowSearchClick } showSearchBox={ showSearchBox }/>
        { showSearchBox && <Search /> }
        <PageProvider>
          <Results />
          <PageControls /> 
        </PageProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
