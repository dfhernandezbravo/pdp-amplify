import styled, { css, keyframes } from 'styled-components';

export const ColorGroupContainer = styled.div`
  width: 74px;
  height: 2.5rem;
  border: 1px solid #828282;
  border-radius: 4px;
  padding: 0.3rem;
  cursor: pointer;
`;

export const Color = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 65%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  };
  to {
    opacity: 1;
  };`;

export const Footer = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: Open Sans;
    font-size: 11px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #727273;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      :after {
        content: '▲';
        color: #fff;
        font-size: large;
        height: 13px;
        position: absolute;
        bottom: -12px;
        left: 15%;
        animation: ${fadeAnimation} 0.3s ease forwards;
        z-index: 999;
        text-shadow: 0 -2px 3px #00000040;
      }
    `}
`;
