import React from 'react'
import styled from 'styled-components'
import backgroundMobile from "../assets/home/mobile/image-header.jpg"
import backgroundTablet from "../assets/home/tablet/image-header.jpg"
import backgroundDesktop from "../assets/home/desktop/image-hero.jpg"

const Home = () => {
  return (
    <Wrapper>
      <section className="mark-two-background">
        {/* <div className="image-header-description">
        </div> */}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .mark-two-background {
    width: 100%;
    background-color: #191919;
    height: 60rem;
    background-image: url(${backgroundMobile});
    background-size: cover;
    top: -9rem;
    position: relative;
    background-repeat: repeat-y;
    z-index: -2;
    background-position: center 40%;
    display: flex;
    justify-content: center;
  }

  /* .image-header-description {
    width: 32.8rem;
    height: 29rem;
    background-color: red;
    margin-top: 19.8rem;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    position: absolute;
  } */

  @media (min-width: 410px) {
    .mark-two-background {
      background-size: contain;
    }
  }

  @media (min-width: 490px) {
    .mark-two-background {
      background-image: url(${backgroundTablet});
      background-size: cover;
      background-position: 50% 20%;
    }
  }

  @media (min-width: 630px) {
    .mark-two-background {
      background-size: contain;
    }
  }

  @media (min-width: 860px) {
    .mark-two-background {
      background-image: url(${backgroundDesktop});
      background-size: cover;
      top: -9.6rem;
      background-position: 50% 40%;
    }
  }

  @media (min-width: 1180px) {
    .mark-two-background {
      background-size: contain;
    }
  }


`

export default Home