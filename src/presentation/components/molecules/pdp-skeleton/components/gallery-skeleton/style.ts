import styled from 'styled-components';

export const GallerySkeletonContainer = styled.div`
  display: flex;
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
    height: 50dvh;
    display: flex;
    justify-content: center;
  }
`;

export const MainImageSkeleton = styled.div`
  max-width: 600px;
  height: 50%;
  width: 85%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const ThumbnailsSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 15%;
`;

export const ThumbnailSkeletonContainer = styled.div`
  height: 79px;
  width: 79px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 1px solid #e0e3e8;
  border-radius: ${(props) => props.theme.radius.xsm};
`;
