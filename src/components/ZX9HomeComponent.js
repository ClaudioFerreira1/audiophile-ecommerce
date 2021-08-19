import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import circles from '../assets/home/desktop/pattern-circles.svg'
import ZX9 from "../assets/home/desktop/image-speaker-zx9.png"

const ZX9HomeComponent = () => {
  return (
    <Wrapper>
      <img src={ZX9} alt="ZX9 speaker" />
      <div className="ZX9-description-div">
        <h2>ZX9 SPEAKER</h2>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to="/product/zx9-speaker">
          <div className="black-button">
            See Product
          </div>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 32.7rem;
  height: 60rem;
  background: url(${circles});
  margin-top: 6.5rem;
  background-color: var(--clr-dark-orange);
  border-radius: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  width: 87%;
  margin-bottom: 2.4rem;
  background-position: 50% -265%;
  background-repeat: no-repeat;
  background-size: 170%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 17.3rem;
    margin-top: 4.8rem;
  }

  .ZX9-description-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2.4rem;
    margin-top: 4rem;
  }


  .ZX9-description-div h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: center;
    letter-spacing: 0.128571rem;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 20rem;
  }

  .ZX9-description-div p {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.75;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1rem;
    width: 28rem;
  }

  @media (min-width: 600px) {
    margin-top: 5rem;
    width: 92%;
    max-width: unset;
    background-position: 50% 194%;
    background-size: 120%;
    height: 72rem;

    .ZX9-description-div {
      margin-top: 6.4rem;
    }

    .ZX9-description-div h2 {
      line-height: 5.8rem;
      text-align: center;
      letter-spacing: 0.2rem;
      font-size: 5.6rem;
      width: 28rem;
    }

    .ZX9-description-div p {
      width: 35rem;
      margin-top: 0.5rem;
      margin-bottom: 3.5rem;
    }
  }

  @media (min-width: 1080px) {
    margin-top: 8rem;
    max-width: 111rem;
    flex-direction: row;
    column-gap: 13.8rem;
    align-items: flex-end;
    overflow: hidden;
    height: 56rem;
    background-position: -150% 20%;
    background-size: 90%;

    img {
    width: 38rem;
    margin-left: 15rem;
    margin-bottom: -1rem;
    }

    .ZX9-description-div h2,
    .ZX9-description-div p {
      text-align: left;
    }

    .ZX9-description-div {
      align-items: flex-start;
      margin-bottom: 11rem;
    }

    .ZX9-description-div p {
      margin-bottom: 2rem;
    }
  }

`

export default ZX9HomeComponent