import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (<Wrapper>
    <div className="emoji"></div>
    <h3>Sorry, the page you are searching for doesn't exist.</h3>
  </Wrapper>)
}

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  justify-content: center;
  align-items: center;
  text-transform: none;
  text-align: center;
  padding: 4rem;

  h3 {
    text-transform: none;
    font-size: 2.5rem;
  }

  .emoji::after {
    content: "(>﹏<)";
    font-size: 10rem;
  }

  @media (min-width: 650px) {
    .emoji::after {
      font-size: 15rem;
    }

    h3 {
      text-transform: none;
      font-size: 3.5rem;
  }
  }
`


export default Error