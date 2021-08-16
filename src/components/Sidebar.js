import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <Wrapper>
      <div className={`${isSideBarOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} onClick={closeSideBar}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .modal-overlay {
  position: fixed;
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
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  height: 75rem;
  }
`

export default Sidebar