import styled from 'styled-components';

export const SwiperContainer = styled.div`
  max-width: 600px;
  height: 90%;
  width: 85%;
  max-width: 100dvw;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90dvw;
  height: 90%;
  touch-action: none;
`;

export const ZoomLabel = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  bottom: 10%;
  width: fit-content;
  pointer-events: none;
  letter-spacing: 0;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 600;
  height: 32px;
  padding: 8px;
  background: #f1f1f1;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 6px;
  z-index: 10;
`;
