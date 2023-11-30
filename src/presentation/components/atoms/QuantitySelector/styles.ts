import styled, { css } from 'styled-components';

export const QuantitySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;

  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    width: 4rem;
    text-align: center;
    -moz-appearance: textfield; /* Firefox */
    border: 1px solid #c2c2c2;
    height: 3rem;
    border-left: none;
    border-right: none;
  }

  input:focus,
  input:active,
  input:focus:active {
    background-image: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const Button = styled.button<{ side?: string }>`
  cursor: pointer;
  border-radius: 0.625rem;
  ${(props) =>
    props.side === 'left'
      ? css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `
      : props.side === 'right'
      ? css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `
      : null}

  border: 1px solid #c2c2c2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  width: 3rem;
  height: 3rem;
`;
