import styled from 'styled-components';

export const SkeletonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

export const ZoomContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    height: auto;
    width: 100%;
  }
`;

export const Overlay = styled.div<{
  $background?: string;
}>`
  position: absolute;
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: zoom-in;
  transition: background-size 0.1s ease;
  z-index: 1;
  background-size: 250%;
`;
