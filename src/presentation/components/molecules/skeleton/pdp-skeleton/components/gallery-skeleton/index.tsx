import { Skeleton } from '@components/atoms/skeleton';
import { GallerySkeletonContainer } from './style';

const GallerySkeleton = () => {
  return (
    <GallerySkeletonContainer>
      <Skeleton />
    </GallerySkeletonContainer>
  );
};

export default GallerySkeleton;
