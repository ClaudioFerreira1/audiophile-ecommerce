import React, { useState, useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  CART_MODAL_OPEN,
  CART_MODAL_CLOSE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  ORDER_CONFIRMATION_MODAL_OPEN,
  ORDER_CONFIRMATION_MODAL_CLOSE
} from './actions.js'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  isCartModalOpen: false,
  isOrderConfirmationModalOpen: false,
  isSideBarOpen: false,
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  vat_value: 0,
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showOneOrder, setShowOneOrder] = useState(false);

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
  const openOrderConfirmationModal = () => {
    document.body.style.overflow = 'hidden';
    dispatch({ type: ORDER_CONFIRMATION_MODAL_OPEN })
  }
  const closeOrderConfirmationModal = () => {
    document.body.style.overflow = 'unset';
    dispatch({ type: ORDER_CONFIRMATION_MODAL_CLOSE })
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
  const increase = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id })
  }
  const decrease = (id) => {
    setShowOneOrder(false)
    dispatch({ type: DECREASE_AMOUNT, payload: id })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <AppContext.Provider value={{ ...state, openCartModal, closeCartModal, openSideBar, closeSideBar, addToCart, removeItem, increase, decrease, clearCart, openOrderConfirmationModal, closeOrderConfirmationModal, showOneOrder, setShowOneOrder }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }