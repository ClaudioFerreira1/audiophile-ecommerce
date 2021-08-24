// import React, { useEffect, useContext, useReducer } from 'react'
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

const reducer = (state, action) => {
  if (action.type === CART_MODAL_OPEN) {
    return { ...state, isCartModalOpen: true }
  }
  if (action.type === CART_MODAL_CLOSE) {
    return { ...state, isCartModalOpen: false }
  }
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSideBarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false }
  }
  if (action.type === ADD_TO_CART) {
    const { id, slug, name, price, amount } = action.payload
    const tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          return { ...cartItem, amount: newAmount }
        }
        else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id,
        name: name,
        slug: slug,
        price: price,
        amount: amount,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }


  throw new Error(`No Matching "${action.type}" - action type`)
}


export default reducer