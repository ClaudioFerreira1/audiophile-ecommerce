import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProductsCategories from "../components/ProductsCategories.js"
import ZX9HomeComponent from "../components/ZX9HomeComponent.js"
import ZX7HomeComponent from "../components/ZX7HomeComponent.js"
import YX1HomeComponent from "../components/YX1HomeComponent.js"
import BringingYouTheBest from "../components/BringingYouTheBest.js"
import backgroundMobile from "../assets/home/mobile/image-header.jpg"
import backgroundTablet from "../assets/home/tablet/image-header.jpg"
import backgroundDesktop from "../assets/home/desktop/image-hero.jpg"

const Home = () => {
  return (
    <Wrapper>
      <div className="mark-two-background">
      </div>
      <div className="image-header-description">
        <span className="overline ">NEW PRODUCT</span>
        <h2>XX99 Mark II HeadphoneS</h2>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to="/product/xx99-mark-two-headphones">
          <div className="orange-button">
            See Product
          </div>
        </Link>
      </div>
      <div className="products-categories">
        <ProductsCategories />
      </div>
      <ZX9HomeComponent />
      <ZX7HomeComponent />
      <YX1HomeComponent />
      <BringingYouTheBest />
    </Wrapper>
  )
}

const Wrapper = styled.main`

  .products-categories {
    margin-top: -6.25rem;
  }

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

  .image-header-description {
    width: 32.8rem;
    height: 29rem;
    margin-top: -49rem;
    left: 50%;
    margin-left: -16.4rem;
    z-index: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-header-description h2 {
    font-weight: bold;
    font-size: 3.6rem;
    margin-top: 2.1rem;
    line-height: 4.0rem;
    text-align: center;
    letter-spacing: 0.128571rem;
    text-transform: uppercase;
    color: #FFFFFF;
    font-style: normal;
  }

  .image-header-description p {
    font-style: normal;
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.75;
  }

  .overline {
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

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

  @media (min-width: 600px) {
    .products-categories {
      margin-top: -9rem;
    }
  }

  @media (min-width: 630px) {
    .mark-two-background {
      background-size: contain;
      height: 72.9rem;
    }

    .image-header-description {
      margin-top: -62rem;
    }

    .image-header-description h2 {
      line-height: 4.4rem;
      letter-spacing: 0.2rem;
      text-align: center;
      font-size: 4.6rem;
    }

    .image-header-description p {
      width: 34.9rem;
    }
  }

  @media (min-width: 1040px) {
    .products-categories {
      margin-top: -8rem;
    }

    .mark-two-background {
      background-image: url(${backgroundDesktop});
      background-size: cover;
      top: -9.6rem;
      background-position: 50% 40%;
    }
    
    .image-header-description {
      margin-top: -58rem;
      left: 0;
      margin-left: 4rem;
      align-items: flex-start;
    }

    .image-header-description h2 {
      margin-top: 2.8rem;
    }

    .image-header-description h2,
    .image-header-description p {
      text-align: left;
    }
  }

  @media (min-width: 1250px) {
    .mark-two-background {
      background-size: contain;
    }

    .image-header-description {
      margin-left: calc((100% - 111rem)/2);
    }
  }


`

export default Home