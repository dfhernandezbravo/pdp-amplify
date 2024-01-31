import { Container } from './styles';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

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
