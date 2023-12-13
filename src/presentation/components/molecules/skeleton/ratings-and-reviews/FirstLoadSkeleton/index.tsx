import { Skeleton } from '@cencosud-ds/easy-design-system';
import {
  AverageRateContainer,
  CommentListContainer,
  Container,
} from './styles';
import CommentListSkeleton from '../CommentListSkeleton/indesx';

const FirstLoadSkeleton = () => {
  return (
    <Container>
      <AverageRateContainer>
        <Skeleton />
      </AverageRateContainer>
      <CommentListContainer>
        <CommentListSkeleton />
      </CommentListContainer>
    </Container>
  );
};

export default FirstLoadSkeleton;
