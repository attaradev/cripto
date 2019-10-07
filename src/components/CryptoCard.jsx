import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.4);
  padding: 1rem 0;

  p {
    span {
      font-weight: bolder;
    }
  }

  h4 {
    padding: 0.5rem;
  }

  .title {
    font-weight: bolder;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.4);

      span {
        display: block;
      }
    }
  }
`;

const StyledPercentageChange = styled.span`
  padding: 0.4rem 0.1rem;
  color: ${props => (props.value > 0 ? "green" : "red")};
`;

const CryptoCard = ({ crypto }) => (
  <StyledCard>
    <h2>
      {crypto.name} - {crypto.symbol}
    </h2>
    <p>
      Price: <span>{crypto.price}</span>
    </p>
    <h4>Percentage Changes</h4>
    <div className="grid">
      <div>
        <span className="title">1 hour</span>
        <StyledPercentageChange value={crypto.percent_change_1h}>
          {crypto.percent_change_1h}
        </StyledPercentageChange>
      </div>
      <div>
        <span className="title">24 hours</span>
        <StyledPercentageChange value={crypto.percent_change_24h}>
          {crypto.percent_change_24h}
        </StyledPercentageChange>
      </div>
      <div>
        <span className="title">7 days</span>
        <StyledPercentageChange value={crypto.percent_change_7d}>
          {crypto.percent_change_7d}
        </StyledPercentageChange>
      </div>
    </div>
  </StyledCard>
);

export default CryptoCard;
