import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import checkIcon from '../assets/cart/check-symbol-white.svg'
import { Link } from 'react-router-dom'

const OrderConfirmationModal = () => {
  const { isOrderConfirmationModalOpen, closeOrderConfirmationModal, cart, total_amount, clearCart, showOneOrder, setShowOneOrder } = useGlobalContext();

  useEffect(() => {
    if (cart.length > 0) {
      setShowOneOrder(true)
    } else {
      setShowOneOrder(false)
    }
  }, [cart, setShowOneOrder])

  const closeAndCleanCart = () => {
    setShowOneOrder(false)
    closeOrderConfirmationModal()
    clearCart()
  }

  return (<ModalOverlay>
    <div className={`${isOrderConfirmationModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`} onClick={() => closeAndCleanCart()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="orange-circle">
          <img src={checkIcon} alt="check mark" />
        </div>
        <div>
          <h5>THANK YOU</h5>
          <h5>FOR YOUR ORDER</h5>
        </div>
        <p className="modal-container-message">You will receive an email confirmation shortly.</p>
        <div className="order-content">
          <div className="order-content-items">
            <div className="order-content-items-list">
              {(showOneOrder) ?
                <div className="order-item">
                  <img src={`/cart/image-${cart[0].slug}.jpg`} alt="order item" />
                  <div className="item-description">
                    <h4>{cart[0].name.replace(/Headphones|Speaker|Wireless Earphones/g, "")}</h4>
                    <p>${cart[0].price.toLocaleString()}</p>
                  </div>
                  <p className="item-amount">x{cart[0].amount}</p>
                </div>
                :
                <>
                  {cart.map((item) => {
                    return <div className="order-item" key={item.id}>
                      <img src={`/cart/image-${item.slug}.jpg`} alt="order item" />
                      <div className="item-description">
                        <h4>{item.name.replace(/Headphones|Speaker|Wireless Earphones/g, "")}</h4>
                        <p>${item.price.toLocaleString()}</p>
                      </div>
                      <p className="item-amount">x{item.amount}</p>
                    </div>
                  })}
                </>
              }
            </div>
            {(cart.length === 1) ? ""
              :
              <>
                <div className="separation-list"></div>
                <div className="other-items-button">
                  {(showOneOrder) ?
                    <button onClick={() => setShowOneOrder(!showOneOrder)}>
                      and {cart.length - 1} {(cart.length === 2) ? "another item." : "other items."}
                    </button>
                    :
                    <button onClick={() => setShowOneOrder(!showOneOrder)}>
                      View less.
                    </button>}
                </div>
              </>
            }
          </div>
          <div className="order-content-grand-total">
            <div>
              <p>Grand total</p>
              <h6>${(total_amount + 50 + (Math.floor(total_amount * 0.2))).toLocaleString()}</h6>
            </div>
          </div>
        </div>
        <Link to="/" className="back-to-home" onClick={() => closeAndCleanCart()}>
          <div className="orange-button">
            BACK TO HOME
          </div>
        </Link>
      </div>
    </div>
  </ModalOverlay>)
}

const ModalOverlay = styled.div`

  a.back-to-home,
  div.orange-button {
    width: 100%;
  }

  .item-description {
    width: max-content;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .item-amount {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
  }

  .item-description h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000000;
    font-family: "Manrope";
  }

  .item-description p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
  }

  .order-item img {
    width: 5rem;
  }

  .order-item {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .order-content-grand-total h6{
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: 'Manrope';
  }

  .other-items-button {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .other-items-button button {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.0214286rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
    cursor: pointer;
  }

  .other-items-button button:hover {
    color: #D87D4A;
  }

  .order-content-items-list {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: 1.25rem;
  }

  .separation-list {
    width: 100%;
    height: 0.1rem;
    mix-blend-mode: normal;
    opacity: 0.08;
    background: #000000;
  }

  .order-content-grand-total p {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
    text-transform: uppercase;
  }

  .order-content-grand-total div {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
  }

  .order-content-items {
    width: 100%;
    background-color: #F1F1F1;
    height: max-content;
    border-radius: 0.8rem 0.8rem 0 0;
    padding: 2.4rem 2.2rem 0 2.2rem;
  }

  .order-content-grand-total {
    width: 100%;
    background-color: #000000;
    height: 9.2rem;
    border-radius: 0 0 0.8rem 0.8rem;
    padding-top: 1.5rem;
    padding-left: 2.4rem;
  }

  /* .test-div {
    width: 100%;
    height: 35rem;
    background-color: blue;
  } */
  
  .orange-circle {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    padding: 1.2rem;
    background-color: #D87D4A;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .order-content {
    width: 100%;
    /* height: 23.3rem; */
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
  }

  .orange-circle img {
    width: 4rem;
  }

  .modal-container h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: 0.0857143rem;
    text-transform: uppercase;
    color: #000000;
    font-family: 'Manrope';
    /* width: 73%; */
  }

  .modal-container-message {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: 'Manrope';
  }

  .modal-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
    position: fixed;
    /* padding-top: 4rem;
    padding-bottom: 4rem; */
  }

  .show-modal {
    visibility: visible;
    z-index: 2;
  }

  .modal-container {
    border-radius: 0.8rem;
    width: 87%;
    max-height: 90vh;
    height: max-content;
    max-width: 32.7rem;
    overflow-y: auto;
    /* margin-top: 4rem;
    margin-bottom: 4rem; */
    /* text-align: center;
    display: grid;
    place-items: center;
    position: relative; */
    background: white;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2.1rem;
    /* justify-content: space-between; */
    text-align: left;
  }

  @media (min-width: 600px) {

    .modal-container {
      padding: 4.8rem;
      width: 92%;
      height: max-content;
      /* max-height: 58.1rem; */
      max-height: 95vh;
      max-width: 54rem;
      row-gap: 3.3rem;
    }

    .modal-container h5 {
      line-height: 3.65rem;
      letter-spacing: 0.114286rem;
      font-size: 3.2rem;
    }

    .order-content {
      flex-direction: row;
    }

    .order-content-grand-total {
      background-color: #000000;
      height: auto;
      border-radius: 0 0.8rem 0.8rem 0;
      width: 40%;
      position: relative;
    }

    .order-content-items {
      height: max-content;
      border-radius: 0.8rem 0 0 0.8rem;
      width: 60%;
    }

    .order-content-grand-total div {
      position: absolute;
      bottom: 1rem;
      left: 2rem;
    }
  }
`


export default OrderConfirmationModal