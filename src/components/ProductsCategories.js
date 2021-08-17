import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import firstImage from '../assets/shared/desktop/image-headphones.png'
import secondImage from '../assets/shared/desktop/image-speakers.png'
import thirdImage from '../assets/shared/desktop/image-earphones.png'
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg'


const ProductsCategories = () => {
  return (<Wrapper>
    <div className="main-div-categories">
      <div className="categories-block">
        <Link to='/headphones' className="div-category">
          <img src={firstImage} alt="headphone" />
          <h3>Headphones</h3>
          <span>Shop</span>
          <img src={arrowRight} alt="arrow-right" />
        </Link>
        <Link to='/speakers' className="div-category">
          <img src={secondImage} alt="speaker" />
          <h3>Speakers</h3>
          <span>Shop</span>
          <img src={arrowRight} alt="arrow-right" />
        </Link>
        <Link to='/earphones' className="div-category">
          <img src={thirdImage} alt="earphone" />
          <h3>Earphones</h3>
          <span>Shop</span>
          <img src={arrowRight} alt="arrow-right" />
        </Link>
      </div>
    </div>
  </Wrapper>)
}

const Wrapper = styled.div`
  .main-div-categories {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 8.4rem;
    padding-bottom: 3.5rem;
  }

  .categories-block {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    row-gap: 6.8rem;
  }

  .div-category {
    width: 32.7rem;
    height: 16.5rem;
    background-color: var(--clr-lighter-grey);
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-style: normal;
    font-size: 1.3rem;
    line-height: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
  }

  .div-category img:nth-child(1) {
    width: 18rem;
    position: relative;
    top: -6.75rem;
  }

  .div-category h3 {
    font-weight: bold;
    position: relative;
    top: -7.7rem;
    font-size: 1.5rem;
    line-height: 2.0rem;
    text-align: center;
    letter-spacing: 0.107143rem;
    text-transform: uppercase;
    color: #000000;
    font-style: normal;
    width: fit-content;
  }

  .div-category span {
    opacity: 0.5;
    position: relative;
    top: -6.5rem;
  }

  .div-category:hover span{
    color: var(--clr-dark-orange);
  }

  img[alt~="arrow-right"] {
    position: relative;
    top: -8rem;
    margin-left: 6.2rem;
  }

`

export default ProductsCategories