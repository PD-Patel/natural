import React from "react";
import styled from "styled-components";
import {scroller} from 'react-scroll'
import ProductCard from "./ProductCard";
function Products({ProductRef}) {
  return (
    <Container ref={ProductRef}>
      <Decor />

      <TitleTag>
        <h1>
          We are Very <span>Professional</span> in our Work
        </h1>
      </TitleTag>
      <Main>
        <HeadLine>
          <p>Our Products</p>
        </HeadLine>

        <Body>
          <ProductCard/> 
          <ProductCard /> 
          <ProductCard /> 
          <ProductCard />
         
        </Body>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
  margin-top: 60px;
  z-index: 100;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @keyframes decor2 {
    0% {
      bottom: 0px;
      left: 0px;
      background: #ff7171;
    }
    25% {
      bottom: 0px;
      left: 300px;
      background: #ff7171;
    }
    50% {
      bottom: 300px;
      left: 300px;
      background: #fff;
    }
    75% {
      bottom: 300px;
      left: 100px;
      background: #fff;
    }
    100% {
      bottom: 0px;
      left: 0px;
      background: #ff7171;
    }
  }

  @keyframes decor3 {
    0% {
      top: 0px;
      left: 0px;
      background: #ff7171;
    }
    25% {
      bottom: 0px;
      right: 100px;
      background: #ff7171;
    }
    50% {
      bottom: 300px;
      right: 300px;
      background: #fff;
    }
    75% {
      bottom: 300px;
      right: 100px;
      background: #fff;
    }
    100% {
      bottom: 0px;
      right: 0px;
      background: #ff7171;
    }
  }
`;

const TitleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    width: 560px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 60px;
    /* or 115% */

    text-align: center;

    color: #ffffff;

    span {
      color: #e5cf00;
    }

    @media only screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 45px;
      width: 350px;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  padding: 15px;
  height: 100%;
  margin-top: 50px;

  display: flex;
  flex-direction: column;

`;
const HeadLine = styled.div`
  width: 200px;
  height: 50px;

  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  p {
    width: 166px;
    height: 36px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 36px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;

    mix-blend-mode: hard-light;
  }
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
  justify-content: space-evenly;
 
  align-items: center;
  margin-top: 100px;
  @media only screen and (max-width: 908px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Decor = styled.div`
  background-color: #ff7171;
  width: 250px;
  height: 250px;
  border-radius: 100%;

  position: absolute;
  z-index: -10;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  filter: blur(150px);
  animation: decor2 10s linear infinite;
`;

export default Products;
