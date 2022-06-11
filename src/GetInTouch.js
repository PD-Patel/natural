import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
function GetInTouch() {

  const navigate = useNavigate()

  return (
    <Container>
      <Main>
        <h1>Get In Touch</h1>

        <p>
          Please get in touch and our expert support team answer your all
          questions
        </p>

        <button onClick={() => navigate('/contactus')}>
          <p>Contact Us</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7.47 5.53L9.19 7.25H4V8.75H9.19L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z"
              fill="white"
            />
          </svg>
        </button>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  width: 80%;
    padding: 20px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  z-index: 100;
  height: 100%;

  position: relative;
  @media only screen and (max-width: 768px) {
    
    margin-bottom: 0;
  }
`;

const Main = styled.div`
  width: 60%;
  height: 322px;

  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */

    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    width: 400px;
    color: rgba(0, 0, 0, 0.83);

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 25px;
      width: 300px;
    }
  }

  button {
    background: #231a36;
    border-radius: 26px;
    display: flex;
    border: none;
    width: 180px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
      color: #fff;
      margin-right: 10px;
      margin-bottom: 0;
      width: 100px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default GetInTouch