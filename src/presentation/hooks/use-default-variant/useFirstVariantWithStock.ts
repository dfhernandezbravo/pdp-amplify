import { Item } from '@entities/product/get-product.response';
import { useMemo } from 'react';

const useFirstVariantWithStock = (items: Item[] | undefined) => {
  const firstVariantWithStock = useMemo(() => {
    const defaultOption = items?.find(
      (item) => item?.sellers?.[0]?.commertialOffer?.availableQuantity > 0,
    );
    return items?.length
      ? defaultOption
        ? defaultOption
        : items[0]
      : undefined;
  }, [items]);

  return firstVariantWithStock;
};

export default useFirstVariantWithStock;
