import { useAppSelector } from '@hooks/store-hooks';
import { Title, VariantsContainer } from './styles';
import Options from './components/options';
import { useEffect, useState } from 'react';

const Variants = () => {
  const { product, selectedVariant } = useAppSelector((state) => state.product);
  const variations = selectedVariant?.itemSpecifications?.variations;
  const [selectedColor, setSelectedColor] = useState<string>();

  const hasTintometric = (variation: string) => {
    if (
      product?.colorCodes &&
      product?.colorCodes?.length > 0 &&
      (variation === 'Color' || variation === 'Colores')
    )
      return true;
    else return false;
  };

  useEffect(() => {
    if (variations?.includes('Color') || variations?.includes('Colores')) {
      setSelectedColor(
        selectedVariant?.itemSpecifications?.Color?.[0] ||
          selectedVariant?.itemSpecifications?.Colores?.[0],
      );
    }
  }, [selectedVariant]);

  return (
    <>
      {variations?.map((variation) => {
        if (product?.items && !hasTintometric(variation))
          return (
            <VariantsContainer key={variation}>
              <Title>
                {variation}
                {(variation === 'Color' || variation === 'Colores') &&
                  `: ${selectedColor}`}
              </Title>
              <Options options={product?.items} variation={variation} />
            </VariantsContainer>
          );
      })}
    </>
  );
};

export default Variants;
