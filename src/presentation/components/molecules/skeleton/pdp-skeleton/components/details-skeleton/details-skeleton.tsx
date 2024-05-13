import { Skeleton } from '@components/atoms/skeleton';
import { DetailsSkeletonContainer } from './style';

const DetailsSkeleton = () => {
  return (
    <DetailsSkeletonContainer>
      <Skeleton height={'100%'} />
    </DetailsSkeletonContainer>
  );
};

export default DetailsSkeleton;
