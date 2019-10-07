import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Animation from "react-useanimations";
import {
  selectLoading,
  selectCryptos
} from "../redux/cryptos/cryptos.selectors";
import { fetchCryptosRequest } from "../redux/cryptos/cryptos.actions";
import CryptoCard from "../components/CryptoCard";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CryptoList = ({ cryptos, fetchCryptos, isLoading }) => {
  React.useEffect(() => {
    fetchCryptos();
  }, []);

  return isLoading ? (
    <StyledContainer>
      <Animation animationKey="loading2" size={600} style={{ padding: 50 }} />
    </StyledContainer>
  ) : (
    <StyledGrid>
      {cryptos.map(crypto => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </StyledGrid>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  cryptos: selectCryptos
});

const mapDispatchToProps = dispatch => ({
  fetchCryptos: () => dispatch(fetchCryptosRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoList);
