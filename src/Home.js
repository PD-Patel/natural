import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import styled from "styled-components";
import Footer from "./Footer";
import Product from "./Products";
import Testimonials from "./Testimonials";
import GetInTouch from "./GetInTouch";
import { useRef } from "react";
import {scroller} from 'react-scroll'
function Home() {


  const ProductRef = useRef(null)
  console.log(ProductRef)

  const ScrollToElement = (element) => {
   scroller.scrollTo(element, {
     duration: 800,
     delay: 0,
     smooth: "easeInOutQuart",
   });
  }
  return (
    <Container>
      <Navbar ProductRef={ProductRef} ScrollToElement={ScrollToElement}/>
      <Hero />
      <Product ProductRef={ProductRef}/>
      <Testimonials />
      <GetInTouch />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: auto;
  z-index: 10;

 

  ::-webkit-scrollbar {
    display: none;
  }
`;


export default Home;
