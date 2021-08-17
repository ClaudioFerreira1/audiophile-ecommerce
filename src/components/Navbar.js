import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import logo from '../assets/shared/desktop/logo.svg'
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import hamburguerIcon from '../assets/shared/tablet/icon-hamburger.svg'
import closeIcon from '../assets/shared/tablet/close-icon.svg'
import CartButton from './CartButton'

const Navbar = () => {
  const { openSideBar, isSideBarOpen, closeSideBar } = useGlobalContext();

  return (<NavElement>
    <div className="main-div-navbar">
      <button onClick={isSideBarOpen ? closeSideBar : openSideBar}>
        <img className="hamburguer-icon" src={isSideBarOpen ? closeIcon : hamburguerIcon} alt="hamburguer icon" />
      </button>
      <Link to='/' className="anchor-logo" onClick={isSideBarOpen ? closeSideBar : null}>
        <img src={logo} alt='audiophile logo' />
      </Link>
      <ul className="links-div">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/headphones'>Headphones</Link></li>
        <li><Link to='/speakers'>Speakers</Link></li>
        <li><Link to='/earphones'>Earphones</Link></li>
      </ul>
      <CartButton />
    </div>
    <div className='grey-line'></div>
  </NavElement>
  )
}

const NavElement = styled.nav`
  background-color: var(--clr-first-dark);
  width: 100%;
  height: 9rem;

  .hamburguer-icon {
    transform: scale(1.15);
  }

  .main-div-navbar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2.8rem;
    padding-right: 2.8rem;
  }

  .links-div {
    display: none;
  }

  .anchor-logo {
    margin-top: 0.3rem;
  }

  .grey-line {
    width: 100%;
    background-color: white;
    height: 0.1rem;
    opacity: 0.1;
    mix-blend-mode: normal;
  }

@media (min-width: 860px) {
  height: 9.6rem;

  .grey-line {
    width: calc(100% - 7rem);
    margin-left: auto;
    margin-right: auto;
  }

  .main-div-navbar {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .main-div-navbar button:nth-child(1) {
    display: none;
  }

  .links-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3.4rem;
    margin-bottom: 0.15rem;
    padding-right: 5rem;
  }

  ul.links-div li a:link,
  ul.links-div li a:visited {
    font-weight: bold;
    font-size: 1.175rem;
    line-height: 2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #FFFFFF;
    &:hover,
    &:active {
      color: var(--clr-dark-orange);
    }
  }
}

@media (min-width: 1200px) {
  .main-div-navbar {
    width: 111rem;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .grey-line {
    width: 111.7rem;
  }
}
`

export default Navbar