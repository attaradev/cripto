import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectLoading,
  selectError,
  selectCryptos
} from "../redux/cryptos/cryptos.selectors";
import { fetchCryptosRequest } from "../redux/cryptos/cryptos.actions";
import CryptoCard from "../components/CryptoCard";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const CryptoList = ({ cryptos, fetchCryptos }) => {
  React.useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <StyledGrid>
      {cryptos.map(crypto => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </StyledGrid>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  cryptos: selectCryptos,
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  fetchCryptos: () => dispatch(fetchCryptosRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoList);
