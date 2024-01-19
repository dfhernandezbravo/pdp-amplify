import { useAppSelector } from '@hooks/storeHooks';
import { Title, VariantsContainer } from './styles';
import Options from './components/options';

const Variants = () => {
  const { product } = useAppSelector((state) => state.product);
  const variations = product?.items?.[0]?.itemSpecifications?.variations;

  return (
    <>
      {variations?.map((variation) => {
        if (product?.items && product?.items?.length > 0)
          return (
            <VariantsContainer key={variation}>
              <Title>{variation}</Title>
              <Options options={product?.items} variation={variation} />
            </VariantsContainer>
          );
      })}
    </>
  );
};

export default Variants;
