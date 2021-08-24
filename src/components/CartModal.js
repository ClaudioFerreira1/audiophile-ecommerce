import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import AmountButton from './AmountButton.js'


const CartModal = () => {
  const { decrease, increase, total_items, total_amount, cart, isCartModalOpen, closeCartModal, clearCart } = useGlobalContext();

  return (
    <ModalOverlay>
      <div className={`${isCartModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} onClick={closeCartModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="cart-modal-content">
            <div className="cart-modal-content-header">
              <h6>CART({total_items})</h6>
              <button type="button" onClick={clearCart}>Remove all</button>
            </div>
            {(cart.length < 1) ? <div className="empty-cart">
              <h6>The cart is empty.</h6>
            </div> : <div className="cart-list">
              {cart.map((item) => {
                return <div className="cart-item" key={item.id}>
                  <img src={`/cart/image-${item.slug}.jpg`} alt="item icon" />
                  <div className="item-description">
                    <h4>{item.name.replace(/Headphones|Speaker|Wireless Earphones/g, "")}</h4>
                    <p>${item.price.toLocaleString()}</p>
                  </div>
                  <div className="amount-btns">
                    <div className="change-amount" onClick={() => decrease(item.id)}>-</div>
                    <div>{item.amount}</div>
                    <div className="change-amount" onClick={() => increase(item.id)}>+</div>
                  </div>
                </div>
              })}
            </div>}
            <div className="cart-modal-total">
              <p>TOTAL</p>
              <h6>${total_amount.toLocaleString()}</h6>
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
    margin-bottom: 3.1rem;
  }

  .amount-btns {
    width: 9.6rem;
    height: 3.2rem;
    background: #F1F1F1;
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.8rem;
    text-align: center;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: #000000;
    font-family: 'Manrope',
    sans-serif;
  }

  .amount-btns div {
    width: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .change-amount {
    color: black;
    opacity: 0.25;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .item-description h4{
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
    font-family: 'Manrope';
    color: #000000;
  }

  div.change-amount:hover {
    color: #D87D4A;
    opacity: 1;
  }

  .item-description p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
  }

  .item-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.5rem;
    width: 7rem;
  }

  .cart-item {
    display: flex;
    flex-direction: row;
    column-gap: 1.8rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.4rem;
  }

  .cart-item img {
    width: 6.4rem;
    border-radius: 0.8rem;
  }

  .cart-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
  }

  .empty-cart {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
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
    align-items: center;
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
    height: max-content;
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
  /* height: 48.8rem; */
  height: max-content;
  max-height: 48.8rem;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.4rem;
  padding-top: 3.1rem;
  padding-left: 3.1rem;
  padding-right: 3.1rem;
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
    height: max-content;
    margin-right: calc((100% - 111rem)/2);
  }
}

`

export default CartModal