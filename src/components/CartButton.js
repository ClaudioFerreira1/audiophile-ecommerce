import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import cartIcon from '../assets/shared/desktop/icon-cart.svg'

const CartButton = () => {
  const { openCartModal, total_items } = useGlobalContext();

  return (
    <CartBtn onClick={openCartModal}>
      <img src={cartIcon} alt="cart icon" />
      <span className={`${total_items > 0 ? "cart-value" : "display-none"}`}>{total_items}</span>
    </CartBtn>
  )
}

const CartBtn = styled.button`
  img {
    transform: scale(1.15);
  }

  span.display-none {
    display: none;
  }

  .cart-value {
    position: absolute;
    top: 1.7rem;
    margin-left: 1.4rem;
    background: var(--clr-dark-orange);
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  @media (min-width: 1200px) {
    right: unset;

    img {
    transform: scale(1);
    }

    .cart-value {
    transform: scale(0.8);
    top: 2.25rem;
    }
  }
`

export default CartButton