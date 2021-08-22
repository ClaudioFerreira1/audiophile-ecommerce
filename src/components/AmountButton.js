import React from 'react'
import styled from 'styled-components'

const AmountButton = ({ increase, decrease, amount }) => {
  return (<Wrapper>
    <div className="change-amount" onClick={decrease}>-</div>
    <div>{amount}</div>
    <div className="change-amount" onClick={increase}>+</div>
  </Wrapper>)
}

const Wrapper = styled.div`
  width: 12rem;
  height: 4.8rem;
  background: #F1F1F1;
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-align: center;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #000000;
  font-family: 'Manrope',
    sans-serif;

  div {
    width: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .change-amount {
    color: black;
    opacity: 0.25;
    font-size: 1.8rem;
    cursor: pointer;
  }

  div.change-amount:hover {
    color: #D87D4A;
    opacity: 1;
  }

`


export default AmountButton