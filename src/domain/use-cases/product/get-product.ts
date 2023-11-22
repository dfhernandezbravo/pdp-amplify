import ProductService from '@services/product';
import { AxiosError } from 'axios';

const getProduct = async (productId: number) => {
  try {
    const { data } = await ProductService.getProduct(productId);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return new Error(`${axiosError}`);
  }
};

export default getProduct;
