import React from "react";
import styled from "styled-components";
import CryptoList from "./containers/CryptoList";
import Buttons from "./containers/Buttons";

const StyledContainer = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <StyledContainer>
      <Buttons />
      <CryptoList />
    </StyledContainer>
  );
}

export default App;
