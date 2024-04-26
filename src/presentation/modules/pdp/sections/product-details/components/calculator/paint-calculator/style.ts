import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: start;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  margin: 16px 0;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  outline: 1px solid #aaaaaa;
  border-radius: 6px;
  height: 100%;
  padding-right: 3px;
  align-items: center;
  width: 53%;

  div {
    border: none;
    height: 100%;
  }
  span {
    padding: 8px 16px;
    background-color: #f3f3f3;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SelectHands = styled.div`
  width: 40%;

  #handsPaintCalculator > div:first-of-type {
    height: 48px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 16px;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  label {
    font-size: 14px;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
`;
