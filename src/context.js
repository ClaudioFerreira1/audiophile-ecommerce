import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  CART_MODAL_OPEN,
  CART_MODAL_CLOSE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE
} from './actions.js'

const initialState = {
  isCartModalOpen: false,
  isSideBarOpen: false,
}


const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openCartModal = () => {
    document.body.style.overflow = 'hidden';
    dispatch({ type: CART_MODAL_OPEN })
  }
  const closeCartModal = () => {
    if (state.isSideBarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    dispatch({ type: CART_MODAL_CLOSE })
  }
  const openSideBar = () => {
    document.body.style.overflow = 'hidden';
    // document.getElementById("sidebar-modal-overlay").style.overflow = "hidden";
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSideBar = () => {
    document.body.style.overflow = 'unset';
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <AppContext.Provider value={{ ...state, openCartModal, closeCartModal, openSideBar, closeSideBar }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }