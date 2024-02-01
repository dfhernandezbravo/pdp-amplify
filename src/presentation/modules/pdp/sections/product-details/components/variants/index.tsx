import { useAppSelector } from '@hooks/storeHooks';
import { Title, VariantsContainer } from './styles';
import Options from './components/options';
import { useEffect, useState } from 'react';

const Variants = () => {
  const { product, selectedVariant } = useAppSelector((state) => state.product);
  const variations = selectedVariant?.itemSpecifications?.variations;
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    if (variations?.includes('Color')) {
      setSelectedColor(selectedVariant?.itemSpecifications?.Color?.[0]);
    }
  }, [selectedVariant]);

  return (
    <>
      {variations?.map((variation) => {
        if (product?.items)
          return (
            <VariantsContainer key={variation}>
              <Title>
                {variation}
                {variation === 'Color' && `: ${selectedColor}`}
              </Title>
              <Options options={product?.items} variation={variation} />
            </VariantsContainer>
          );
      })}
    </>
  );
};

export default Variants;
