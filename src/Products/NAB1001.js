import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer';
import Navbar from '../Navbar';
function NAB1001() {

    
  return (
    <Container>
      <Navbar contactus={true}/>
      <Main>
        <Inner>
          <Image>
            <img src="./photos/balerpng.png" alt="" />
          </Image>
          <Description>
            <Info>
              <h5>Machine Specification</h5>
              <div>
                <p>Dimension : 1200 mm * 1300mm</p>
                <p>Kerb Weight :1500 kg</p>
                <p>Capacity of Hopper : 200 kg</p>
                <p>Operation System : Hydraulic</p>
                <p>
                  Power Source : 3-Phase Electricity or Diesel Generator Set
                </p>
                <p>Machine Output : 40 bales per hour</p>
                <p>Machine Output : 20-25 MT per day</p>
              </div>
            </Info>
            <Info>
              <h5>Bale Specification</h5>
              <div>
                <p>Bale Weight : 60 – 80 kg</p>
                <p>Compaction Density : 650 kg/m³</p>
                <p>Bale Width : 500 mm</p>
                <p>Bale Height : 500 mm</p>
              </div>
            </Info>
          </Description>
        </Inner>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #042826;

  width: 100%;
  height: fit-content;
  min-height: 100vh;
  min-width: 100%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    overflow-x: hidden;
  }
 
`;

const Main = styled.div`
  width: 100%;
  min-height: 700px;

  flex: 1;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 
  padding: 15px;
  
  width: 65%;
  height: 80%;
  
  border-radius: 10px;

  @media only screen and (max-width: 900px) {
    height: fit-content;
  align-items: center;
  justify-content: center;
    max-height: fit-content;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;


const Image = styled.div`
  width: 35%;

  img {
    width: 100%;
  }

  background: url(baler1.svg);

  box-sizing: border-box;
  border-radius: 50px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Description = styled.div`
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 70px;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;

    text-decoration-line: underline;

    color: #e5cf00;
  }

  div {
    width: 100%;
    margin-top: 20px;
    margin-left: 10px;
    color: #fff;
    p {
      margin-bottom: 10px;
    }
  }
`;

export default NAB1001