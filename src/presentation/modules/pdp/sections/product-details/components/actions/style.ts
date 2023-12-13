import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 0.5rem;
    -webkit-box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.2);
    z-index: 99;
  }
`;

export const QuantitySkeletonContainer = styled.div`
  overflow: hidden;
  border-radius: 0.625rem;
  height: 48px;
  width: 160px;
`;

export const QuantityTitle = styled.p`
  color: #4d4d4d;
  font-weight: 700;
  font-size: 1rem;
`;

export const OutOfStockText = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #1a1a1a;
  margin-bottom: 3rem;
`;
