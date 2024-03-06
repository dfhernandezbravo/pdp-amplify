import ProductService from '@services/product';
import { AxiosError } from 'axios';
import { GetProduct } from '@entities/product/get-product.response';

const formatColorCodes: (product: GetProduct) => GetProduct = (product) => {
  const colorCodes: { [key: string]: string[] } = {};
  product?.specifications?.['Códigos de Pintura']?.forEach((spec) => {
    if (spec in product.specifications) {
      colorCodes[spec] = product.specifications?.[spec];
      delete product.specifications[spec];
    }
  });
  delete product.specifications['Códigos de Pintura'];
  return { ...product, colorCodes };
};

const getColorsFromCms = async () => {
  try {
    const { data } = await ProductService.getColors();
    return data.value;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`${axiosError}`);
    return null;
  }
};

const getProduct = async (productId: number) => {
  try {
    const { data } = await ProductService.getProduct(productId);

    if (data?.allSpecificationsGroups?.includes('Códigos de Pintura')) {
      const formattedRepo: GetProduct | null = formatColorCodes(data);
      const colorsFromCms = await getColorsFromCms();

      return { ...formattedRepo, colorPalettes: colorsFromCms };
    } else return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`${axiosError}`);
    return null;
  }
};

export default getProduct;
