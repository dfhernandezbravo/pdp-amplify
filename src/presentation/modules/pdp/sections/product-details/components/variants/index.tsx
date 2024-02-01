import { useAppSelector } from '@hooks/storeHooks';
import { Title, VariantsContainer } from './styles';
import Options from './components/options';
import { useEffect, useState } from 'react';

const Variants = () => {
  const { product, selectedItem } = useAppSelector((state) => state.product);
  const variations = selectedItem?.itemSpecifications?.variations;
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    if (variations?.includes('Color')) {
      setSelectedColor(selectedItem?.itemSpecifications?.Color?.[0]);
    }
  }, [selectedItem]);

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
