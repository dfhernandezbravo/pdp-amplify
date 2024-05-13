import { Skeleton } from '@components/atoms/skeleton';
import {
  Row,
  RowSkeletonContainer,
  TableSkeletonContainer,
  TableTitleSkeleton,
} from './style';

type Props = { count: number };

const TableSkeleton = ({ count = 1 }: Props) => {
  const isEven = (index: number): boolean => {
    return index % 2 === 0;
  };

  return (
    <TableSkeletonContainer>
      <TableTitleSkeleton>
        <Skeleton />
      </TableTitleSkeleton>
      {[...Array(count)].map((item, index) => (
        <Row key={`row-skeleton-${index}`} $isEven={isEven(index)}>
          <span>
            <RowSkeletonContainer>
              <Skeleton />
            </RowSkeletonContainer>
          </span>
          <span>
            <RowSkeletonContainer>
              <Skeleton />
            </RowSkeletonContainer>
          </span>
        </Row>
      ))}
    </TableSkeletonContainer>
  );
};

export default TableSkeleton;
