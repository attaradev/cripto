import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.4);
  padding: 1rem 0;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      display: flex;
      flex-direction: column;

      span {
        display: block;
      }
    }
  }
`;

const CryptoCard = ({ crypto }) => (
  <StyledCard>
    <h2>{crypto.name}</h2>
    <p>Price</p>
    <h4>Percentage Changes</h4>
    <div className="grid">
      <div>
        <span>1 hour</span>
        <span>value</span>
      </div>
      <div>
        <span>24 hours</span>
        <span>value</span>
      </div>
      <div>
        <span>7 days</span>
        <span>value</span>
      </div>
    </div>
  </StyledCard>
);

export default CryptoCard;
