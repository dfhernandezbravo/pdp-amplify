import cartService from '@services/cart';
import { AxiosError } from 'axios';

const getCart = async (cartId: string) => {
  try {
    const { data } = await cartService.getCart(cartId);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`${axiosError}`);
  }
};

export default getCart;
