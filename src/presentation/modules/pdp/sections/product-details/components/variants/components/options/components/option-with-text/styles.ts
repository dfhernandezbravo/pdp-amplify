import Link from 'next/link';
import styled, { css } from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledLink = styled(Link)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid rgba(134, 134, 134, 1);
  position: relative;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  width: 3.313rem;
  height: 2.25rem;

  ${({ selected }) => {
    if (selected)
      return css`
        outline: 2px solid rgba(51, 51, 51, 1);
      `;
  }}
`;

export const OutOfStock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 36px;
  position: relative;
  outline: 1px solid rgba(180, 194, 203, 1);
  color: rgba(180, 194, 203, 1);
  opacity: 80%;
  cursor: not-allowed;
  border-radius: 0.25rem;

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
`;
