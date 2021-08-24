import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'


const CartModal = () => {
  const { cart, isCartModalOpen, closeCartModal } = useGlobalContext();

  return (
    <ModalOverlay>
      <div className={`${isCartModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} onClick={closeCartModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="cart-modal-content">
            <div className="cart-modal-content-header">
              <h6>CART(12)</h6>
              <button type="button">Remove all</button>
            </div>
            {(cart.length < 1) ? <div className="empty-cart"><h6>The cart is empty.</h6></div> : null}
            <div className="cart-modal-total">
              <p>TOTAL</p>
              <h6>$123</h6>
            </div>
            <Link to="/checkout">
              <div className="orange-button">
                Checkout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ModalOverlay>)
}

const ModalOverlay = styled.div`
  .orange-button {
    width: 100%;
  }

  .empty-cart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .empty-cart h6 {
    text-transform: unset;
  }

  .cart-modal-total p {
    opacity: 0.5;
  }

  .cart-modal-content-header,
  .cart-modal-total {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .cart-modal-content-header button {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-decoration-line: underline;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: "Manrope";
  }

  .cart-modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
  }

  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* display: grid;
  place-items: center; */
  padding-top: 11.4rem;
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: -1;
  }

  .show-modal {
  visibility: visible;
  z-index: 2;
  }

  .modal-container {
  background: white;
  border-radius: 0.8rem;
  width: 32.7rem;
  height: 48.8rem;
  max-height: calc(100% - 2.2rem);
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.4rem;
  padding: 3.1rem;
  /* margin-top: 11.4rem; */
  }

@media (min-width: 720px) {
  .modal-container {
    width: 37.7rem;
    height: 48.8rem;
    margin-right: 4rem;
  }
}

@media (min-width: 1200px) {
  .modal-container {
    width: 37.7rem;
    height: 48.8rem;
    margin-right: calc((100% - 111rem)/2);
  }
}

`

export default CartModal