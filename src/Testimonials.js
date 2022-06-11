import React from "react";
import styled from "styled-components";
function Testimonials() {
  return (
    <Container>
      <Tag>
        <h1>
          What People Say <span>About Us</span>
        </h1>
      </Tag>

      <Main>
        <Testi>
          <TestiBox>
            <ProfilePic>
              <img src="./photos/user.png" alt="" />
            </ProfilePic>
            <Description>
              <Review>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </Review>
              <User>
                <h5>Dhruval Patel</h5>
                <p>Gujarat, India</p>
              </User>
            </Description>
          </TestiBox>
        </Testi>

        <Testi>
          <TestiBox>
            <ProfilePic>
              <img src="./photos/user.png" alt="" />
            </ProfilePic>
            <Description>
              <Review>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </Review>
              <User>
                <h5>Dhruval Patel</h5>
                <p>Gujarat, India</p>
              </User>
            </Description>
          </TestiBox>
        </Testi>
        <Testi>
          <TestiBox>
            <ProfilePic>
              <img src="./photos/user.png" alt="" />
            </ProfilePic>
            <Description>
              <Review>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </Review>
              <User>
                <h5>Dhruval Patel</h5>
                <p>Gujarat, India</p>
              </User>
            </Description>
          </TestiBox>
        </Testi>
      </Main>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  margin-top: 120px;
  overflow-x: hidden;
  height: 100%;
`;
const Tag = styled.div`
  h1 {
    width: 500px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 60px;
    /* or 115% */

    text-align: center;

    color: #ffffff;
    @media only screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 45px;
      width: 280px;
    }
  }
  span {
    color: #e5cf00;
  }
`;
const Testi = styled.div`
  margin-right: 50px;
  width: fit-content;
  padding: 0 40px;
`;
const Main = styled.div`
  margin: 50px 0;
  display: flex;

  overflow-x: scroll;
  overflow-y: visible;

  width: 83%;
  padding: 50px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 908px) {
    width: 95%;
    padding: 50px 40px;
  }
`;
const TestiBox = styled.div`
  position: relative;
  width: 450px;
  @media only screen and (max-width: 908px) {
    width: 280px;
  }
`;
const ProfilePic = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: -35px;
  left: -35px;

  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  img {
    border-radius: 50%;
    width: 100%;
  }
`;
const Description = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Review = styled.p`
  width: 80%;
  max-width: 450px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  /* TEXT CLR */

  color: #5e6282;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 25px;
  }
`;

const User = styled.div`
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    /* TEXT CLR */

    color: #5e6282;
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 25px;
    }
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    /* TEXT CLR */

    color: #5e6282;
    @media only screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 25px;
    }
  }
`;
export default Testimonials;
