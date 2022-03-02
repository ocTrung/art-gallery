import React, { useState, createContext } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const [currPageNum, setCurrPageNum] = useState(0)

  return (
    <PageContext.Provider value={ [currPageNum, setCurrPageNum] }>
      { children }
    </PageContext.Provider>
  )
}
