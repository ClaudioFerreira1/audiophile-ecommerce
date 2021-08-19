import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import YX1mobile from '../assets/home/mobile/image-earphones-yx1.jpg'
import YX1tablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import YX1desktop from '../assets/home/desktop/image-earphones-yx1.jpg'

const YX1HomeComponent = () => {
  return (
    <Wrapper>
      <div className="yx1-background"></div>
      <div className="yx1-description">
        <div className="yx1-description-info">
          <h4>YX1 EARPHONES</h4>
          <Link to="/product/yx1-earphones">
            <div className="transparent-button">
              See Product
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 32.7rem;
  width: 87%;
  height: 42.4rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  margin-bottom: 2.4rem;
  
  .yx1-background {
    background: url(${YX1mobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.8rem;
    width: 100%;
    height: 20rem;
  }

  .yx1-description {
    background: #F1F1F1;
    border-radius: 0.8rem;
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
  }

  .yx1-description-info {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
    margin-left: 2.4rem;
  }

  .yx1-description-info a {
    width: 16rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    column-gap: 1.1rem;
    max-width: unset;
    width: 92%;

    .yx1-background {
      background: url(${YX1tablet});
    }

    .yx1-background {
      height: 32rem;
      background-position: 50% 50%;
      background-size: 120%;
    }

    .yx1-description {
      height: 32rem;
    }

    .yx1-description-info {
      margin-left: 4.1rem;
    }
  }

  @media (min-width: 1080px) {
    column-gap: 2.4rem;
    max-width: 111rem;

    .yx1-background {
      background: url(${YX1desktop});
    }

    .yx1-description-info {
      margin-left: 9.5rem;
    }
  }

`

export default YX1HomeComponent