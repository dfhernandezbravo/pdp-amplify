import { GetProduct, Item } from '@entities/product/get-product.response';

export function findVariantSelected(
  product: GetProduct,
  variantSkuId: string,
): Item | undefined {
  return product?.items.find((item) => item.itemId === variantSkuId);
}
