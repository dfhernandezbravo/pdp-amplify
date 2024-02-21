import styled, { css, keyframes } from 'styled-components';

export const ZoomContainer = styled.div<{ $loading: boolean }>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  img {
    object-fit: contain;
    height: auto;
    width: 100%;
    ${({ $loading }) =>
      $loading &&
      css`
        height: 0;
      `}
  }
`;

const growAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Overlay = styled.div<{
  $background?: string;
}>`
  position: absolute;
  width: 100%;
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: zoom-in;
  transition: background-size 0.1s ease;
  z-index: 1;
  background-size: 300%;
  animation: ${growAnimation} 0.3s ease forwards;
`;
