import styled from 'styled-components';

export const SwiperContainer = styled.div`
  max-width: 600px;
  height: 100%;
  width: 85%;
  position: relative;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ThumbnailsContainer = styled.div`
  display: flex;
`;
