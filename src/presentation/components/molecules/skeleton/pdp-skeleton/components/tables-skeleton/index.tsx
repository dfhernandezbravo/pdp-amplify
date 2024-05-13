import { Skeleton } from '@components/atoms/skeleton';
import TableSkeleton from './components/table-skeleton';
import { TablesSkeletonContainer, TitleSkeleton } from './style';

const TablesSkeleton = () => {
  return (
    <TablesSkeletonContainer>
      <TitleSkeleton>
        <Skeleton />
      </TitleSkeleton>
      <TableSkeleton count={3} />
      <TableSkeleton count={7} />
      <TableSkeleton count={1} />
    </TablesSkeletonContainer>
  );
};

export default TablesSkeleton;
