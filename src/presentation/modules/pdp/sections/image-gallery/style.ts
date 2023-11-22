import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SwiperContainer = styled.div`
  max-height: 450px;
  max-width: 600px;
  height: 100%;
  width: 85%;
  cursor: zoom-in;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
