import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    background-position: 0;
  }
  
  to {
    background-position-x: -200%;
  }
`;

export const SkeletonContainer = styled.div`
  position: relative;
  background: #aaacae;
  width: 100%;
  height: 100%;
`;

export const Skeleton = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${skeletonAnimation} 1s linear infinite;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
`;
