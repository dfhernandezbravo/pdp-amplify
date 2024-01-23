import styled, { css } from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledLink = styled.div<{
  selected: boolean;
  disabled: boolean;
}>`
  outline: 1px solid rgba(134, 134, 134, 1);
  position: relative;
  border-radius: 0.25rem;
  cursor: pointer;
  height: 2.7rem;
  width: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected }) => {
    if (selected)
      return css`
        outline: 2px solid rgba(51, 51, 51, 1);
      `;
  }}

  img {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const OutOfStock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  outline: 1px solid rgba(180, 194, 203, 1);
  color: rgba(180, 194, 203, 1);
  opacity: 80%;
  cursor: not-allowed;
  border-radius: 0.25rem;
  height: 2.7rem;
  width: 2.7rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10%;
    width: 120%;
    height: 1px;
    background-color: rgba(180, 194, 203, 1);
    transform: rotate(34deg);
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    opacity: 60%;
  }
`;
