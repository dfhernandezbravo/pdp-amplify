import styled, { css, keyframes } from 'styled-components';

const growAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 200px;
  }
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  };
  to {
    opacity: 1;
  };`;

export const ToolTipContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  margin-top: 1.3rem;
  left: 0;
  width: 93%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 1px 6px 0px #00000040;
  z-index: 99;
  cursor: auto;
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          animation: ${growAnimation} 0.2s ease-in;
        `
      : css`
          display: none;
        `}
`;

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 72px);
  gap: 0 0.8rem;
  animation: ${fadeAnimation} 0.9s ease-in;
  width: 100%;
`;

export const ColorContainer = styled.div`
  cursor: pointer;
  &:hover {
    .color-name {
      color: #000;
    }

    div {
      outline: 2px solid #000;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
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

export const Color = styled.div<{ $backgroundColor: string }>`
  height: 50px;
  width: 72px;
  flex: 0 0 17%;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && $backgroundColor};
`;

export const ColorName = styled.p`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  width: 100%;
  margin: 0;
  color: white;
`;
