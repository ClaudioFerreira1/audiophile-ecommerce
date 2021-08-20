import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ZX7mobile from '../assets/home/mobile/image-speaker-zx7.jpg'
import ZX7tablet from '../assets/home/tablet/image-speaker-zx7.jpg'
import ZX7desktop from '../assets/home/desktop/image-speaker-zx7.jpg'

const ZX7HomeComponent = () => {
  return (<Wrapper>
    <div className="zx7-description">
      <h4>ZX7 SPEAKER</h4>
      <Link to="/product/zx7-speaker">
        <div className="transparent-button">
          See Product
        </div>
      </Link>
    </div>
  </Wrapper>)
}

const Wrapper = styled.div`
  max-width: 32.7rem;
  width: 87%;
  height: 32rem;
  background: url(${ZX7mobile}); 
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  border-radius: 0.8rem;
  background-size: 100%;
  background-color: #DCDCDC;

  a {
    width: 16rem;
  }

  .zx7-description {
    position: absolute;
    margin-top: 10.1rem;
    margin-left: 2.4rem;
    row-gap: 3.2rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    background: url(${ZX7tablet});
    margin-top: 2.4rem;
    width: 92%;
    max-width: unset;
    background-repeat: no-repeat;
    background-size: cover;

    .zx7-description {
      margin-left: 6.2rem;
    }
  }

  @media (min-width: 800px) {
    background: url(${ZX7desktop});
    max-width: 111rem;

    .zx7-description {
      margin-left: 9.5rem;
    }
  }
`

export default ZX7HomeComponent
