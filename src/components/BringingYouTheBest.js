import React from 'react'
import styled from 'styled-components'
import backgroundImageMobile from '../assets/shared/mobile/image-best-gear.jpg'
import backgroundImageTablet from '../assets/shared/tablet/image-best-gear.jpg'
import backgroundImageDesktop from '../assets/shared/desktop/image-best-gear.jpg'

const BringingYouTheBest = () => {
  return (<Wrapper>
    <div className="background-picture">
    </div>
    <div className="bringing-you-description">
      <h4>Bringing you the <span>best</span> audio gear</h4>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  </Wrapper>)
}

const Wrapper = styled.div`
  max-width: 32.7rem;
  height: 69.8rem;
  margin-top: 8.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 87%;
  margin-bottom: 8.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .background-picture {
    width: 100%;
    height: 30rem;
    border-radius: 0.8rem;
    background: url(${backgroundImageMobile});
    background-size: cover;
    background-position: 50% 50%;
  }

  .bringing-you-description {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 3.2rem;
  }

  .bringing-you-description span {
    color: #D87D4A;
  }

  .bringing-you-description h4 {
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 1px;
  }

  .bringing-you-description p {
    mix-blend-mode: normal;
    opacity: 0.5;
    color: #000000;
  }

  @media (min-width: 600px) {
    margin-top: -1.9rem;
    max-width: unset;
    width: 92%;
    height: max-content;

    .background-picture {
      background: url(${backgroundImageTablet});
      background-size: 125%;
      background-color: #010101;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    .bringing-you-description {
      margin-top: 5rem;
      row-gap: 4rem;
      width: 90%;
    }

    .bringing-you-description h4 {
      line-height: 4.4rem;
      text-align: center;
      letter-spacing: 0.142857rem;
      font-size: 4rem;
      margin-left: auto;
      margin-right: auto;
    }

  }

  @media (min-width: 760px) {
      .background-picture {
        background-size: 100%;
      }
  }

  @media (min-width: 790px) {
    height: 58.8rem;
    max-width: 111rem;
    flex-direction: row-reverse;
    align-items: center;
    /* column-gap: 2.4rem; */
    justify-content: space-between;

    .background-picture {
      background: url(${backgroundImageDesktop});
      background-color: white;
      background-repeat: no-repeat;
      height: 100%;
      width: 49%;
      background-position: 50% 50%;
    }

    .bringing-you-description {
      width: 42.25%;
      margin-top: 1rem;
    }

    .bringing-you-description h4 {
      width: 86%;
      text-align: left;
      margin-left: 0;
    }

    .bringing-you-description p {
      text-align: left;
    }
  }
`


export default BringingYouTheBest