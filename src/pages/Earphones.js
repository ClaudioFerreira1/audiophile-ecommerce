import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProductsCategories from "../components/ProductsCategories.js"
import BringingYouTheBest from "../components/BringingYouTheBest.js"
import YX1Mobile from '../assets/category-earphones/mobile/image-yx1-earphones.jpg'
import YX1Tablet from '../assets/category-earphones/tablet/image-yx1-earphones.jpg'
import YX1Desktop from '../assets/category-earphones/desktop/image-yx1-earphones.jpg'

const Earphones = () => {
  return (<Wrapper>
    <div className="title">
      <h4>Earphones</h4>
    </div>
    <div className="first-product">
      <div className="first-image"></div>
      <div className="first-product-description">
        <p className="overline">New product</p>
        <h4>YX1 WIRELESS EARPHONES</h4>
        <p className="first-product-detailed-description">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
        <Link to="/product/yx1-earphones">
          <div className="orange-button">
            See Product
          </div>
        </Link>
      </div>
    </div>
    <div className="products-categories">
      <ProductsCategories />
    </div>
    <BringingYouTheBest />
  </Wrapper>)
}


const Wrapper = styled.main`
  
  .first-product-detailed-description {
    opacity: 0.5;
  }

  .products-categories {
    margin-top: 5rem;
    padding-bottom: 4rem;
  }

  div.first-product-description h4 {
    width: 70%;
  }
  
  .first-product-description{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.2rem;
    row-gap: 2.4rem;
    text-align: center;
  }

  .first-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${YX1Mobile});
    background-size: cover;
    background-position: 50% 15%;
  }

  .first-product {
    max-width: 32.7rem;
    height: 72.4rem;
    margin-top: 6.4rem;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5.6rem;
    width: 87%;
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  .title {
    height: 10.2rem;
    background-color: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .title h4 {
    color: white;
  }

  @media (min-width: 600px) {

    div.first-product-description h4 {
    width: 80%;
    }

    .products-categories {
      margin-bottom: 10rem;
      padding-bottom: 2rem;
    }

    .first-product-description h4 {
      line-height: 4.4rem;
      text-align: center;
      letter-spacing: 0.142857rem;
      font-size: 4rem;
      width: 55rem;
    }

    .first-product-description {
      width: 57rem;
      height: 30.2rem;
      margin-top: 5.2rem;
    }

    .first-image {
      background: url(${YX1Tablet});
      background-position: 50% 50%;
      background-size: 100%;
    }

    .first-product {
      max-width: unset;
      height: 70.6rem;
      width: 92%;
      margin-top: 12rem;
      padding-bottom: 0;
    }

    .title {
      height: 24.6rem;
    }

    .title h4 {
      text-align: center;
      letter-spacing: 0.142857rem;
      font-size: 4rem;
      line-height: 4.4rem;
    }
  }

  @media (min-width: 990px) {
    .first-product {
      flex-direction: row;
      max-width: 111rem;
      height: 56rem;
      margin-top: 16rem;
      align-items: center;
      column-gap: 9rem;
    }

    div.first-product-description h4 {
    width: 70%;
    }

    .products-categories {
      margin-bottom: 13rem;
      padding-bottom: 1rem;
    }

    .row-reverse {
      flex-direction: row-reverse;
    }

    .first-product-description h4 {
      text-align: left;
      width: 100%;
    }

    .first-product-description a {
      margin-top: 1.6rem;
    }

    .first-product-description {
      margin-top: 0;
      align-items: flex-start;
      text-align: left;
      width: 44.5rem;
      height: 34.3rem;
    }

    .first-image {
      background: url(${YX1Desktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`

export default Earphones