import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <Wrapper>
      <div className={`${isSideBarOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} onClick={closeSideBar} id="sidebar-modal-overlay">
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .modal-overlay {
  position: fixed;
  top: 9rem;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  /* display: grid;
  place-items: center; */
  display: flex;
  overflow-y: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: -1;
  }

  .show-modal {
  visibility: visible;
  z-index: 2;
  }

  .modal-container {
  position: fixed;
  top: 9.1rem;
  max-height: calc(100% - 9.1rem);
  overflow-y: scroll;
  background: white;
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  height: 75rem;
  margin-bottom: 5rem;
  }

  @media (min-width: 600px) {
    .modal-container {
      height: 34rem;
    }
  }

  @media (min-width: 860px) {
    .modal-overlay {
      display: none;
    }
  }
`

export default Sidebar