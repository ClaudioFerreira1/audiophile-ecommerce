import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  CART_MODAL_OPEN,
  CART_MODAL_CLOSE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS
} from './actions.js'

const initialState = {
  isCartModalOpen: true,
  isSideBarOpen: false,
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  vat_value: 0,
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
  const addToCart = (id, slug, name, price, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { id, slug, name, price, amount } })
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } })
  }
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <AppContext.Provider value={{ ...state, openCartModal, closeCartModal, openSideBar, closeSideBar, addToCart }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }