import React from 'react';
import {
  MainImageSkeleton,
  ThumbnailSkeletonContainer,
  ThumbnailsSkeleton,
  GallerySkeletonContainer,
} from './style';
import Skeleton from '@components/atoms/skeleton';
import Desktop from '@components/Desktop';

const GallerySkeleton = () => {
  return (
    <GallerySkeletonContainer>
      <Desktop>
        <ThumbnailsSkeleton>
          {[...Array(5)].map((item, i) => (
            <ThumbnailSkeletonContainer key={`thumbnails-skeleton-${i}`}>
              <Skeleton />
            </ThumbnailSkeletonContainer>
          ))}
        </ThumbnailsSkeleton>
      </Desktop>
      <MainImageSkeleton>
        <Skeleton />
      </MainImageSkeleton>
    </GallerySkeletonContainer>
  );
};

export default GallerySkeleton;
