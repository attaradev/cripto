import React, { useEffect } from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoList from "./containers/CryptoList";
import Buttons from "./containers/Buttons";
import { selectError } from "./redux/cryptos/cryptos.selectors";

toast.configure({
  autoClose: 6000,
  draggable: false
});

const StyledContainer = styled.div`
  padding: 2rem;
`;

function App({ error }) {
  const displayError = () => {
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER
    });
  };

  useEffect(() => {
    error && displayError();
  }, [error]);

  return (
    <StyledContainer>
      <Buttons />
      <CryptoList />
    </StyledContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  error: selectError
});

export default connect(mapStateToProps)(App);
