import { useAppSelector } from '@hooks/storeHooks';
import { Description, Section, Title } from './style';

const EmotionalDescription = () => {
  const { product } = useAppSelector((state) => state.product);

  if (product?.description)
    return (
      <Section>
        <Title>Descripción</Title>
        <Description
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />
      </Section>
    );
  else return null;
};

export default EmotionalDescription;
