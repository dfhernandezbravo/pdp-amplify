import {
  AverageRateContainer,
  CommentListContainer,
  Container,
} from './styles';
import CommentListSkeleton from '../CommentListSkeleton/indesx';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

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
