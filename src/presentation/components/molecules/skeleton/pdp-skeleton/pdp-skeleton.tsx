import { Skeleton } from '@components/atoms/skeleton';
import DetailsSkeleton from './components/details-skeleton/details-skeleton';
import GallerySkeleton from './components/gallery-skeleton';
import TablesSkeleton from './components/tables-skeleton';
import {
  BreadcrumbsSkeleton,
  PdpSkeletonContainer,
  Section,
  Separator,
} from './style';

const PdpSkeleton = () => {
  return (
    <PdpSkeletonContainer>
      <BreadcrumbsSkeleton>
        <Skeleton />
      </BreadcrumbsSkeleton>
      <Section>
        <GallerySkeleton />
        <Separator />
        <DetailsSkeleton />
      </Section>
      <Section>
        <TablesSkeleton />
      </Section>
    </PdpSkeletonContainer>
  );
};

export default PdpSkeleton;
