import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'


const CartModal = () => {
  const { isCartModalOpen, closeCartModal } = useGlobalContext();

  return (
    <ModalOverlay>
      <div className={`${isCartModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} onClick={closeCartModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}></div>
      </div>
    </ModalOverlay>)
}

const ModalOverlay = styled.div`
  .modal-overlay {
  position: fixed;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 11.4rem;
  }

@media (min-width: 860px) {
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