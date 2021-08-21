import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProductsCategories from "../components/ProductsCategories.js"
import BringingYouTheBest from "../components/BringingYouTheBest.js"
import ZX9Mobile from '../assets/category-speakers/mobile/image-zx9.jpg'
import ZX9Tablet from '../assets/category-speakers/tablet/image-zx9.jpg'
import ZX9Desktop from '../assets/category-speakers/desktop/image-zx9.jpg'
import ZX7Mobile from '../assets/category-speakers/mobile/image-zx7.jpg'
import ZX7Tablet from '../assets/category-speakers/tablet/image-zx7.jpg'
import ZX7Desktop from '../assets/category-speakers/desktop/image-zx7.jpg'

const Speakers = () => {
  return (<Wrapper>
    <div className="title">
      <h4>Speakers</h4>
    </div>
    <div className="first-product">
      <div className="first-image"></div>
      <div className="first-product-description">
        <p className="overline">New product</p>
        <h4>ZX9 speaker</h4>
        <p className="first-product-detailed-description">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
        <Link to="/product/zx9-speaker">
          <div className="orange-button">
            See Product
          </div>
        </Link>
      </div>
    </div>
    <div className="first-product row-reverse">
      <div className="second-image"></div>
      <div className="first-product-description other-products">
        <h4>ZX7 SPEAKER</h4>
        <p className="first-product-detailed-description">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
        <Link to="/product/zx7-speaker">
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

  .other-products {
    padding-top: 0.5rem;
  }

  div.other-products h4,
  div.first-product-description h4 {
    width: 60%;
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

  .second-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${ZX7Mobile});
    background-size: cover;
    background-position: 50% 50%;
  }

  .first-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${ZX9Mobile});
    background-size: cover;
    background-position: 50% 50%;
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

    .other-products {
    padding-top: 0;
    }

    div.other-products h4,
    div.first-product-description h4 {
    width: 40%;
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

    .second-image {
      background: url(${ZX7Tablet});
      background-position: 50% 50%;
      background-size: 100%;
    }

    .other-products {
      justify-content: space-evenly;
    }

    .first-image {
      background: url(${ZX9Tablet});
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

    div.other-products h4,
    div.first-product-description h4 {
    width: 60%;
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

    .second-image {
      background: url(${ZX7Desktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }

    .first-image {
      background: url(${ZX9Desktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`

export default Speakers