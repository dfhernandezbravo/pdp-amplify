import { Skeleton } from '@cencosud-ds/easy-design-system';
import { Container } from './styles';

const CommentListSkeleton = () => {
  const MainSkeleton = () => {
    return (
      <Container>
        <Skeleton />
      </Container>
    );
  };

  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <MainSkeleton key={index} />
      ))}
    </>
  );
};

export default CommentListSkeleton;
