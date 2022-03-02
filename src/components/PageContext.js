import React, { useState, createContext } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const [currPageNum, setCurrPageNum] = useState(0)
  const [currArtsInfo, setCurrArtsInfo] = useState([])

  return (
    <PageContext.Provider value={ [currPageNum, setCurrPageNum, currArtsInfo, setCurrArtsInfo] }>
      { children }
    </PageContext.Provider>
  )
}
