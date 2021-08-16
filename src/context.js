import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import './actions.js'

const initialState = {}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='app context'>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }