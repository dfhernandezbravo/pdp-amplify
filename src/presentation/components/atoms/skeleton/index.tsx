import React from 'react';
import { Skeleton as SkeletonElement, SkeletonContainer } from './styles';

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonElement />
    </SkeletonContainer>
  );
};
export default Skeleton;
