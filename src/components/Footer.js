import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/desktop/logo.svg'
import FBicon from '../assets/shared/desktop/icon-facebook.svg'
import IGicon from '../assets/shared/desktop/icon-instagram.svg'
import TTicon from '../assets/shared/desktop/icon-twitter.svg'

const Footer = () => {
  return (
    <Wrapper>
      <div className="orange-line"></div>
      <div className="top-div">
        <Link to='/'>
          <img src={Logo} alt='audiophile logo' />
        </Link>
        <ul className="links-div">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/headphones'>Headphones</Link></li>
          <li><Link to='/speakers'>Speakers</Link></li>
          <li><Link to='/earphones'>Earphones</Link></li>
        </ul>
      </div>
      <div className="footer-information">
        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p>Copyright {new Date().getFullYear()}. All rights reserved. </p>
      </div>
      <div className="social-media-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"><img src={FBicon} alt="facebook icon" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com"><img src={TTicon} alt="twitter icon" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><img src={IGicon} alt="instagram icon" /></a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--clr-second-dark);
  width: 100%;
  height: 36.5rem;
  position: relative;
  padding: 7.5rem 16.5rem 4.8rem;

  .links-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3.4rem;
  }

  ul.links-div li a:link,
  ul.links-div li a:visited {
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #FFFFFF;
    &:hover,
    &:active {
      color: var(--clr-dark-orange);
    }
  }

  .top-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .orange-line {
    background-color: var(--clr-dark-orange);
    width: 10.1rem;
    height: 0.5rem;
    position: absolute;
    left: 16.5rem;
    top: 0;
  }

  .social-media-icons {
    display: flex;
    flex-direction: row;
    column-gap: 1.35rem;
    align-items: center;
    width: max-content;
    height: max-content;
    position: absolute;
    right: 16.5rem;
    bottom: 11.8rem;
    & a img:hover {
      filter: invert(52%) sepia(83%) saturate(405%) hue-rotate(336deg) brightness(92%) contrast(83%);
    }
  }

  .footer-information {
    color: #FFFFFF;
    opacity: 0.5;
    width: 56rem;
    margin-top: 3.6rem;
    display: flex;
    flex-direction: column;
    row-gap: 6.7rem;
  }

  .footer-information p:nth-child(2) {
    font-weight: bold;
  }

@media (max-width: 1100px) {
  height: 40rem;
  padding: 6rem 4rem 4.6rem 3.9rem;

  .orange-line {
    left: 3.9rem;
  }

  .top-div {
    flex-direction: column;
    row-gap: 3.2rem;
    width: 42.9rem;
  }

  .social-media-icons {
    right: 4.6rem;
    bottom: 4rem;
  }

  .footer-information {
    width: 68.6rem;
  }
}

@media (max-width: 735px) {
  height: max-content;
  width: 100%;

  .orange-line {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    top: -6rem;
  }

  .top-div {
    align-items: center;
    width: 100%;
    row-gap: 4.8rem;
  }

  .footer-information {
    width: 100%;
    text-align: center;
    margin-top: 4.8rem;
    row-gap: 4.8rem;
  }

  .links-div {
    flex-direction: column;
    align-items: center;
    row-gap: 1.6rem;
  }

  .social-media-icons {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    right: 0;
    bottom: 0;
  }
}

`

export default Footer