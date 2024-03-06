import styled, { keyframes, createGlobalStyle, css } from 'styled-components';

export const BlockScroll = createGlobalStyle<{ $isOpen: boolean }>`
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        body,
        html {
          overflow: hidden;
        }
      `}
`;

const growAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 400px;
  }
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  };
  to {
    opacity: 1;
  };`;

export const ToolTipContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: fit-content;
  background-color: #fff;
  padding: 1rem;
  padding-bottom: 5rem;
  box-shadow: 0 -5px 5px -5px #00000040;
  z-index: 99;
  animation: ${growAnimation} 0.2s ease-in;
  cursor: auto;
`;

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 0.8rem;
  animation: ${fadeAnimation} 0.9s ease-in;
  width: 100%;
`;

export const ColorContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: #333333;
`;

export const Color = styled.div<{
  $backgroundColor: string;
  selected: boolean;
}>`
  height: 50px;
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  ${({ selected }) =>
    selected &&
    css`
      outline: 2px solid #000;
    `};
`;
