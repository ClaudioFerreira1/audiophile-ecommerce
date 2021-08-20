import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import XX99MarkOneMobile from '../assets/category-headphones/mobile/image-xx99-mark-two.jpg'
import XX99MarkOneTablet from '../assets/category-headphones/tablet/image-xx99-mark-two.jpg'
import XX99MarkOneDesktop from '../assets/category-headphones/desktop/image-xx99-mark-two.jpg'

const Headphones = () => {
  return (<Wrapper>
    <div className="title">
      <h4>Headphones</h4>
    </div>
    <div className="first-product">
      <div className="first-image"></div>
      <div className="first-product-description">
        <p className="overline">New product</p>
        <h4>XX99 Mark II Headphones</h4>
        <p className="first-product-detailed-description">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
        <Link to="/product/xx99-mark-two-headphones">
          <div className="orange-button">
            See Product
          </div>
        </Link>

      </div>
    </div>
  </Wrapper>)
}


const Wrapper = styled.main`
  
  .first-product-detailed-description {
    opacity: 0.5;
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
    background: url(${XX99MarkOneMobile});
    background-size: cover;
    background-position: 50% 50%;
  }

  .first-product {
    max-width: 32.7rem;
    height: 72.4rem;
    margin-top: 6.4rem;
    margin-left: auto;
    margin-right: auto;
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
      background: url(${XX99MarkOneTablet});
      background-position: 50% 50%;
      background-size: 100%;
    }

    .first-product {
      max-width: unset;
      height: 70.6rem;
      width: 92%;
    }

    .title {
      height: 24.6rem;
    }

    .title h4 {
    line-height: 4.4rem;
    text-align: center;
    letter-spacing: 0.142857rem;
    font-size: 4rem;
    }
  }

  @media (min-width: 1050px) {
    .first-product {
      flex-direction: row;
      max-width: 111rem;
      height: 56rem;
      margin-top: 16rem;
      align-items: center;
      column-gap: 12.5rem;
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
      background: url(${XX99MarkOneDesktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`

export default Headphones