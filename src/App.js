import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Contactus from "./Contactus";
import Home from "./Home";
import NAB1001 from "./Products/NAB1001";
function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<h1>gallary</h1>} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path='/NAB1001' element={<NAB1001/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  max-width: 1980px;
  margin: auto;
  background-color: #042826;
  z-index: 100;
  
`;

export default App;
