import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProductsCategories from "../components/ProductsCategories.js"
import BringingYouTheBest from "../components/BringingYouTheBest.js"
import XX99MarkTwoMobile from '../assets/category-headphones/mobile/image-xx99-mark-two.jpg'
import XX99MarkTwoTablet from '../assets/category-headphones/tablet/image-xx99-mark-two.jpg'
import XX99MarkTwoDesktop from '../assets/category-headphones/desktop/image-xx99-mark-two.jpg'
import XX99MarkOneMobile from '../assets/category-headphones/mobile/image-xx99-mark-one.jpg'
import XX99MarkOneTablet from '../assets/category-headphones/tablet/image-xx99-mark-one.jpg'
import XX99MarkOneDesktop from '../assets/category-headphones/desktop/image-xx99-mark-one.jpg'
import XX59Mobile from '../assets/category-headphones/mobile/image-xx59.jpg'
import XX59Tablet from '../assets/category-headphones/tablet/image-xx59.jpg'
import XX59Desktop from '../assets/category-headphones/desktop/image-xx59.jpg'

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
    <div className="first-product row-reverse">
      <div className="second-image"></div>
      <div className="first-product-description other-products">
        <h4>XX99 Mark I Headphones</h4>
        <p className="first-product-detailed-description">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
        <Link to="/product/xx99-mark-one-headphones">
          <div className="orange-button">
            See Product
          </div>
        </Link>
      </div>
    </div>
    <div className="first-product">
      <div className="third-image"></div>
      <div className="first-product-description other-products">
        <h4>XX59 Headphones</h4>
        <p className="first-product-detailed-description">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
        <Link to="/product/xx59-headphones">
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

  div.other-products h4 {
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

  .second-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${XX99MarkOneMobile});
    background-size: cover;
    background-position: 50% 50%;
  }

  .third-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${XX59Mobile});
    background-size: cover;
    background-position: 50% 50%;
  }

  .first-image {
    width: 100%;
    border-radius: 0.8rem;
    height: 35.2rem;
    background: url(${XX99MarkTwoMobile});
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
      background: url(${XX99MarkOneTablet});
      background-position: 50% 50%;
      background-size: 100%;
    }

    .third-image {
      background: url(${XX59Tablet});
      background-position: 50% 50%;
      background-size: 100%;
    }

    .other-products {
      justify-content: space-evenly;
    }

    .first-image {
      background: url(${XX99MarkTwoTablet});
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
      background: url(${XX99MarkOneDesktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }

    .third-image {
      background: url(${XX59Desktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }

    .first-image {
      background: url(${XX99MarkTwoDesktop});
      width: 54rem;
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`

export default Headphones