import styled, { css } from 'styled-components';

export const SwiperContainer = styled.div<{ $showThumbnails: boolean }>`
  max-width: 600px;
  height: 90%;
  min-height: 60vh;
  width: ${({ $showThumbnails }) => ($showThumbnails ? '85%' : '100%')};
  ${({ $showThumbnails }) =>
    !$showThumbnails &&
    css`
      display: flex;
      align-items: center;
      height: 100%;
    `};
  position: relative;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Container = styled.div<{ $showThumbnails: boolean }>`
  display: flex;
  justify-content: ${({ $showThumbnails }) =>
    $showThumbnails ? 'space-between' : 'center'};
  width: 100%;
  max-width: 90dvw;
  height: 100%;
  touch-action: none;

  @media (min-width: 1024px) {
    min-width: 40dvw;
  }
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
