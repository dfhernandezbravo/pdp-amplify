import Skeleton from '@components/atoms/skeleton';
import React from 'react';
import { DetailsSkeletonContainer } from './style';

const DetailsSkeleton = () => {
  return (
    <DetailsSkeletonContainer>
      <Skeleton />
    </DetailsSkeletonContainer>
  );
};

export default DetailsSkeleton;
