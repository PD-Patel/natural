import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
function ProductCard() {

    const navigate = useNavigate()
  return (
    <Container onClick={() => navigate('/NAB1001')}>
      <Image>
        <img src="./photos/balerpng.png" alt="" />
      </Image>
      <Description>
        <h2>NLAB-1001</h2>
        <p>
          A superior compactor for farmers and contractors who want to bale
          maize…
        </p>
      </Description>
      <Button>
          <button>
              Read More
          </button>
      </Button>
    </Container>
  );
}

const Container = styled.div`


width: 320px;
height: 500px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media only screen and (max-width:908px) {
    margin-bottom: 40px;
}

`


const Image = styled.div`

    width: 80%;

    img {
        width: 100%;
    }

`


const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  width: 90%;
  font-family: "Poppins";

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;


const Button = styled.div`
  button {
    height: 45px;
    width: 150px;
    background-color: #e5cf00;
    border: none;

    &:hover {
        background-color: darkkhaki;
    }
  }

`;
export default ProductCard