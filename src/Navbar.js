import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Navbar({ScrollToElement,ProductRef,contactus}) {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./photos/logo.svg" alt="" />
      </Logo>
      <Menu>
        {contactus ? (
          <p onClick={() => navigate("/")}>Home</p>
        ) : (
          <p onClick={() => ScrollToElement(ProductRef.current.className)}>
            Products
            <span>
              <svg
                width="10"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.94 0.714233L4 4.05836L7.06 0.714233L8 1.74376L4 6.12471L0 1.74376L0.94 0.714233Z"
                  fill="white"
                />
              </svg>
            </span>
          </p>
        )}
        <p>Gallary</p>
        <p>Download Brochure</p>
      </Menu>
      <Contact onClick={() => navigate("/contactus")}>
        <button>Contact Us</button>
      </Contact>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.div`
cursor: pointer;
  img {
    width: 180px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  justify-content: space-evenly;
  width: 500px;
  p {
    color: antiquewhite;
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: 0.5px;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
const Contact = styled.div`
  margin-bottom: 10px;

  button {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(70px);
    /* Note: backdrop-filter has minimal browser support */
    cursor: pointer;
    border-radius: 21px;
    width: 150px;
    height: 40px;
    border: none;
    color: #fff;
    font-size: 15px;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export default Navbar;
