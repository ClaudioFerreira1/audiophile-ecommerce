import {
  CART_MODAL_OPEN,
  CART_MODAL_CLOSE,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE
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
  throw new Error(`No Matching "${action.type}" - action type`)
}


export default reducer