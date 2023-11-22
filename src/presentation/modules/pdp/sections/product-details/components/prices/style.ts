import styled from 'styled-components';

export const PricesContainer = styled.span`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OfferPrice = styled.span`
  font-size: 1.375rem;
  font-weight: 700;
`;

export const DiscountPercentage = styled.span`
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary[500]};
  color: ${(props) => props.theme.colors.neutral[100]};
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  height: 23px;
  min-width: 40px;
  justify-content: center;
  width: 40px;
`;

export const FullPrice = styled.span`
  color: #4d4d4d;
  text-decoration: line-through;
  font-weight: 400;
  font-size: 0.75rem;
  padding: 10px 0 16px 0;
`;
