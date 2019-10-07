import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCryptosRequest } from "../redux/cryptos/cryptos.actions";
import { selectNext, selectPrevious } from "../redux/cryptos/cryptos.selectors";
import { createStructuredSelector } from "reselect";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const StyledButton = styled.button`
  min-width: 6rem;
  border: 1px solid rgba(7, 7, 7, 0.5);
  box-shadow: 2px 1px grey;
  padding: 1rem;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const Buttons = ({ fetchCryptos, next, previous }) => {
  const fetchNext = () => {
    fetchCryptos(next);
  };
  const fetchPrevious = () => {
    fetchCryptos(previous);
  };
  return (
    <StyledContainer>
      <StyledButton disabled={previous === null} onClick={fetchPrevious}>
        Previous
      </StyledButton>
      <StyledButton disabled={next === null} onClick={fetchNext}>
        Next
      </StyledButton>
    </StyledContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  next: selectNext,
  previous: selectPrevious
});

const mapDispatchToProps = dispatch => ({
  fetchCryptos: start => dispatch(fetchCryptosRequest(start))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
