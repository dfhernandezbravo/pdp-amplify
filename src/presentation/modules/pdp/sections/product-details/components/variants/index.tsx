import { useAppSelector } from '@hooks/storeHooks';
import { Title, VariantsContainer } from './styles';
import Options from './components/options';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Variants = () => {
  const { product } = useAppSelector((state) => state.product);
  const variations = product?.items?.[0]?.itemSpecifications?.variations;
  const router = useRouter();
  const skuId = router.query.skuId as string;
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    if (variations?.includes('Color')) {
      const selectedItem = product?.items?.find(
        (item) => item.itemId === skuId,
      );
      setSelectedColor(selectedItem?.itemSpecifications?.Color?.[0]);
    }
  }, [variations, skuId]);

  return (
    <>
      {variations?.map((variation) => {
        if (product?.items && product?.items?.length > 0)
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
