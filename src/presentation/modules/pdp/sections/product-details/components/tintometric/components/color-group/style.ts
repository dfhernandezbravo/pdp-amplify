import styled, { css, keyframes } from 'styled-components';

export const ColorGroupContainer = styled.div<{ $isOpen: boolean }>`
  height: auto;
  border: 1px solid #828282;
  border-radius: 4px;
  padding: 0.3rem;
  padding-bottom: 0;
  cursor: pointer;
  width: 78px;

  @media (max-width: 768px) {
    width: 48px;
  }
`;

export const Color = styled.div<{ $backgroundColor: string }>`
  height: 30px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && $backgroundColor};
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

  @media (max-width: 768px) {
    justify-content: center;
  }

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
      @media (min-width: 1025px) {
        :after {
          content: '▲';
          color: #fff;
          font-size: large;
          height: 1px;
          position: absolute;
          bottom: -1.1rem;
          left: 15%;
          animation: ${fadeAnimation} 0.3s ease forwards;
          z-index: 999;
          line-height: 0;
          text-shadow: 0 -2px 3px #00000020;
        }
      }
    `}
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
