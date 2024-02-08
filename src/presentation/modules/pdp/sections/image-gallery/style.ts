import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-height: 100%;
`;

export const SwiperContainer = styled.div<{ $loading?: boolean }>`
  max-width: 600px;
  height: 90%;
  width: 82%;
  cursor: zoom-in;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ZoomLabel = styled.div`
  position: absolute;
  bottom: -3%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  letter-spacing: 0;
  color: #4d4d4d;
  font-size: 15px;
  font-weight: 600;
  height: 32px;
  padding: 8px;
  background: #f1f1f1;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  border-radius: 6px;
  z-index: 10;
`;

export const ItemContainer = styled.div`
  position: relative;
`;

export const SkeletonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
