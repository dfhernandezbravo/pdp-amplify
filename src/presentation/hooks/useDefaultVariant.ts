import { Item } from '@entities/product/get-product.response';
import { useRouter } from 'next/router';
import useFirstVariantWithStock from './useFirstVariantWithStock';

const useDefaultVariant = (items: Item[] | undefined) => {
  const router = useRouter();
  const skuId = router.query.skuId as string;
  const firstVariant = useFirstVariantWithStock(items);

  const defaultOption = skuId
    ? items?.find((item) => item.itemId === skuId)
    : firstVariant;

  return defaultOption;
};

export default useDefaultVariant;
