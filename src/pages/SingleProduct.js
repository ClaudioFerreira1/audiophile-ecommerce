import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import data from '../data/data.json'
import AmountButton from '../components/AmountButton'

const SingleProduct = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [amount, setAmount] = useState(1)
  const { slug } = useParams();
  var currentProduct = data.find(product => product.slug === slug);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize)
  }, [])

  const {
    id,
    image: { mobile, tablet, desktop },
    name,
    new: new_label,
    description,
    price,
    cartImage,
    includes,
  } = currentProduct;

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }


  return (<Wrapper>
    <button type='button' className="go-back">Go Back</button>
    <div className="product-detail">
      <img src={size >= 1280 ? desktop.replace("./assets", "") : size >= 768 ? tablet.replace("./assets", "") : mobile.replace("./assets", "")} alt="product" />
      <div className="product-detail-description">
        {new_label ? <p className="overline">New product</p> : ""}
        <h4>{name}</h4>
        <p className="opacity">{description}</p>
        <h6>${price.toLocaleString()}</h6>
        <div className="action-buttons">
          <AmountButton amount={amount} increase={increase} decrease={decrease} />
          <div className="orange-button">
            add to cart
          </div>
        </div>

      </div>
    </div>
  </Wrapper>)
}

const Wrapper = styled.div`
  margin-bottom: 5rem;

  .product-detail-description {
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    row-gap: 2.4rem;
    margin-top: 3.2rem;
  }

  .product-detail-description h6 {
    text-align: left;
  }

  .action-buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .product-detail {
    max-width: 32.7rem;
    margin-top: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    width: 87%;
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  .product-detail img {
    width: 100%;
    background-size: cover;
    background-position: 50% 100%;
  }

  .go-back {
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-left: 2.5rem;
    margin-top: 2.4rem;
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #000000;
    font-family: 'Manrope';
  }

  @media (min-width: 600px) {
    .go-back {
      margin-top: 3.3rem;
    }
  }

  @media (min-width: 860px) {
    .go-back {
      margin-left: 3.8rem;
    }
  }

  @media (min-width: 1200px) {
    .go-back {
      margin-top: 7.9rem;
      margin-left: calc((100% - 111rem)/2);
    }
  }
`


export default SingleProduct