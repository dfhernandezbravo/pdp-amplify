import cartService from '@services/cart';
import { AxiosError } from 'axios';

export const addService = async (
  cartId: string,
  productIndex: number,
  serviceId: string,
) => {
  try {
    const { data } = await cartService.addService(
      { id: serviceId },
      cartId,
      productIndex,
    );
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`${axiosError}`);
  }
};

export const deleteService = async (
  cartId: string,
  productIndex: number,
  serviceId: string,
) => {
  try {
    const { data } = await cartService.deleteService(
      cartId,
      productIndex,
      serviceId,
    );
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`${axiosError}`);
  }
};
