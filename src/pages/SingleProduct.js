import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import data from '../data/data.json'
import AmountButton from '../components/AmountButton'
import BringingYouTheBest from "../components/BringingYouTheBest.js"
import ProductsCategories from "../components/ProductsCategories.js"
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { addToCart } = useGlobalContext();
  const [size, setSize] = useState(window.innerWidth);
  const [amount, setAmount] = useState(1)
  const { slug } = useParams();
  var currentProduct = data.find(product => product.slug === slug);
  let history = useHistory();

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])

  const {
    id,
    image: { mobile, tablet, desktop },
    name,
    new: new_label,
    description,
    price,
    includes,
    features,
    gallery: { first, second, third },
    others,
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
    <button type='button' className="go-back" onClick={() => history.goBack()}>Go Back</button>
    <div className="product-detail">
      <img src={size >= 1050 ? desktop.replace("./assets", "") : size >= 700 ? tablet.replace("./assets", "") : mobile.replace("./assets", "")} alt="product" />
      <div className="product-detail-description">
        {new_label ? <p className="overline">New product</p> : ""}
        <h4>{name}</h4>
        <p className="opacity">{description}</p>
        <h6>${price.toLocaleString()}</h6>
        <div className="action-buttons">
          <AmountButton amount={amount} increase={increase} decrease={decrease} />
          <div className="orange-button" onClick={() => addToCart(id, slug, name, price, amount)}>
            add to cart
          </div>
        </div>
      </div>
    </div>
    <div className="product-description">
      <div className="product-features">
        <h5>Features</h5>
        <p className="opacity">{features}</p>
      </div>
      <div className="product-box">
        <h5>In the box</h5>
        <div>
          {includes.map((item) => {
            return <p key={includes.indexOf(item)}><span id="quantity-span">{item.quantity}x</span>{item.item}</p>
          })}
        </div>
      </div>
    </div>
    <div className="product-galery">
      <div className="product-galery-first">
        <img src={size >= 1050 ? first.desktop.replace("./assets", "") : size >= 700 ? first.tablet.replace("./assets", "") : first.mobile.replace("./assets", "")} alt="gallery 1" />
        <img src={size >= 1050 ? second.desktop.replace("./assets", "") : size >= 700 ? second.tablet.replace("./assets", "") : second.mobile.replace("./assets", "")} alt="gallery 2" />
      </div>
      <div className="product-galery-second">
        <img src={size >= 1050 ? third.desktop.replace("./assets", "") : size >= 700 ? third.tablet.replace("./assets", "") : third.mobile.replace("./assets", "")} alt="gallery 3" />
      </div>
    </div>
    <div className="product-recomendation-div">
      <h5>You may also like</h5>
      <div className="only-the-recommendations">
        {others.map((product) => {
          return <div key={others.indexOf(product)} className="product-recommended">
            <img src={size >= 1050 ? product.image.desktop.replace("./assets", "") : size >= 700 ? product.image.tablet.replace("./assets", "") : product.image.mobile.replace("./assets", "")} alt="" />
            <h5>{product.name}</h5>
            <Link to={`/product/${product.slug}`} onClick={() => setAmount(1)}>
              <div className="orange-button">
                See Product
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
    <div className="products-categories">
      <ProductsCategories />
    </div>
    <BringingYouTheBest />
  </Wrapper>)
}

const Wrapper = styled.div`
  padding-bottom: 5rem;

  .products-categories {
    margin-top: 8rem;
  }

  .product-recommended img{
    width: 100%;
    border-radius: 0.8rem;
  }

  .product-recommended {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 7rem;
    row-gap: 2.5rem;
  }

  .product-recomendation-div h5:nth-child(1) {
    margin-bottom: -3rem;
  }

  .product-recomendation-div {
    width: 87%;
    max-width: 32.7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-galery-first {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .product-galery-second img {
    height: 36.8rem;
    width: 100%;
    border-radius: 0.8rem;
  }

  .product-galery-first img {
    height: 17.4rem;
    width: 100%;
    border-radius: 0.8rem;
  }

  .product-galery {
    width: 87%;
    max-width: 32.7rem;
    margin-top: 7rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .product-description h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: 0.0857143rem;
    text-transform: uppercase;
    color: #000000;
    font-family: 'Manrope';
  }

  .product-box h5 {
    margin-bottom: 2.4rem;
  }

  .product-box #quantity-span{
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #D87D4A;
    font-family: 'Manrope';
    font-style: normal;
    float: left;
    width: 40px;
  }

  .product-box p {
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #00000080;
    mix-blend-mode: normal;
    font-family: 'Manrope';
  }

  .product-description {
    margin-top: 8rem;
    width: 87%;
    max-width: 32.7rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    row-gap: 6rem;
  }

  .product-features {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
  }

  .product-features .opacity {
    white-space: pre-line;
  }

  .product-detail-description {
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    row-gap: 2.4rem;
    margin-top: 3.2rem;
  }

  .product-detail-description h4 {
    width: 90%;
    text-align: center;
  }

  .product-detail-description h6 {
    text-align: left;
  }

  .action-buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
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
    border-radius: 0.8rem;
  }

  .go-back {
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-left: calc((100% - 32.7rem)/2);
    margin-top: 2.4rem;
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #000000;
    font-family: 'Manrope';
  }

  @media (min-width: 700px) {

    .product-recommended {
      width: 22.3rem;
    }

    .products-categories {
      margin-bottom: 12rem;
    }

    .only-the-recommendations {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 69rem;
      column-gap: 1.1rem;
      width: 100%;
    }

    .product-recomendation-div {
      max-width: 69rem;
      margin-top: 10rem;
      flex-direction: column;
      align-items: center;
      width: 92%;
    }

    .product-galery {
      margin-top: 10rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      column-gap: 2rem;
      row-gap: 0;
      width: 92%;
      max-width: 69rem;
      height: 36.8rem;
    }

    .product-galery-first {
      height: 36.8rem;
    }

    .product-description h5 {
      line-height: 3.6rem;
      letter-spacing: 0.114286rem;
      font-size: 3.2rem;
    }

    .product-features {
      row-gap: 3.2rem;
    }

    .product-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .product-description {
      width: 92%;
      max-width: 68.9rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      row-gap: 10rem;
      margin-top: 10rem;
    }

    .product-detail img {
      width: 28.1rem;
      height: 48rem;
    }

    .product-detail {
      flex-direction: row;
      width: 92%;
      max-width: 68.95rem;
      justify-content: space-between;
      margin-top: 3.1rem;
    }

    .product-detail-description .opacity {
      width: 33.9rem;
    }

    .product-detail-description {
      margin-top: 0;
      width: 33.95rem;
    }

    .action-buttons {
      justify-content: space-evenly;
    }

    .go-back {
      margin-left: calc((100% - 92%)/2);
      margin-top: 3.3rem;
    }
  }

  @media (min-width: 750px) {
    .go-back {
      margin-left: calc((100% - 68.95rem)/2);
    }
  }

  @media (min-width: 1050px) {

    .product-recommended {
      width: 35rem;
    }

    .products-categories {
      margin-bottom: 18rem;
    }

    .only-the-recommendations {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 111rem;
      column-gap: 3rem;
      width: 100%;
      margin-top: 2.5rem;
    }

    .product-recomendation-div h5 {
      font-size: 34px;
      line-height: 40px;
    }

    .product-recomendation-div {
      max-width: 111rem;
      margin-top: 12rem;
    }

    .product-galery {
      margin-top: 9rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      column-gap: 3rem;
      row-gap: 0;
      width: 92%;
      max-width: 111rem;
      height: 59.2rem;
    }

    .product-galery-second {
      width: 63.5rem;
    }

    .product-galery-second img {
      height: 59.2rem;
    }

    .product-galery-first img {
      height: 28rem;
    }

    .product-galery-first {
      height: 59.2rem;
      width: 44.5rem;
      justify-content: space-between;
    }

    .product-box {
      flex-direction: column;
      justify-content: unset;
    }

    .product-box h5 {
      margin-bottom: 3rem;
    }

    .product-features {
      width: 63.5rem;
    }

    .product-description {
    margin-top: 7rem;
    width: 92%;
    max-width: 111rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: unset;
    column-gap: 12%;
    /* corrigir in the box margin-left value aquiiiiiiiiii */
    }

    .go-back {
      margin-top: 5.6rem;
      margin-left: calc((100% - 92%)/2);
    }

    .product-detail img {
      width: 54rem;
      height: 56rem;
    }

    .product-detail {
      margin-top: 5.4rem;
      width: 92%;
      max-width: 111rem;
      column-gap: 11%;
      justify-content: unset;
    }

    .product-detail-description h4 {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 0.142857rem;
    }

    .product-detail-description {
      row-gap: 3rem;
    }
  }

  @media (min-width: 1200px) {
    .go-back {
      margin-left: calc((100% - 111rem)/2);
    }
  }
`


export default SingleProduct