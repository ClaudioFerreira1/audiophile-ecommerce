// import React, { useEffect, useContext, useReducer } from 'react'
import {
  CART_MODAL_OPEN,
  CART_MODAL_CLOSE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  ORDER_CONFIRMATION_MODAL_OPEN,
  ORDER_CONFIRMATION_MODAL_CLOSE
} from './actions.js'

const reducer = (state, action) => {
  if (action.type === CART_MODAL_OPEN) {
    return { ...state, isCartModalOpen: true }
  }
  if (action.type === CART_MODAL_CLOSE) {
    return { ...state, isCartModalOpen: false }
  }
  if (action.type === ORDER_CONFIRMATION_MODAL_OPEN) {
    return { ...state, isOrderConfirmationModalOpen: true }
  }
  if (action.type === ORDER_CONFIRMATION_MODAL_CLOSE) {
    return { ...state, isOrderConfirmationModalOpen: false }
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
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce((total, cartItem) => {
      const { amount, price } = cartItem

      total.total_items += amount
      total.total_amount += price * amount
      return total
    },
      {
        total_items: 0,
        total_amount: 0,
      })
    return { ...state, total_items, total_amount }
  }
  if (action.type === INCREASE_AMOUNT) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === DECREASE_AMOUNT) {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempCart }
  }


  throw new Error(`No Matching "${action.type}" - action type`)
}


export default reducer