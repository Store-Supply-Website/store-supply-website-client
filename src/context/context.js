import React, { useState, useEffect } from 'react'

const StoreContext = React.createContext()

const StoreProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [type, setType] = useState()
  const [token, setToken] = useState()
  const [id, setUserId] = useState()
  const [name, setName] = useState()

  return <StoreContext.Provider value={{ isAuthenticated, setIsAuthenticated, type, setType, token, setToken, id, setUserId, name, setName }}>
    {children}
  </StoreContext.Provider>
}


export { StoreProvider, StoreContext }