import cartService from '@services/cart';
import { AxiosError } from 'axios';
import getCart from '..';

jest.mock('@services/cart');

describe('getCart', () => {
  it('should return the cart data when successful', async () => {
    const cartId = '123';
    const mockData = {
      /* mock cart data */
    };
    (cartService.getCart as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await getCart(cartId);

    expect(result).toEqual(mockData);
    expect(cartService.getCart).toHaveBeenCalledWith(cartId);
  });

  it('should throw an error when an Axios error occurs', async () => {
    const cartId = '123';
    const mockError = new Error('Axios error');
    const axiosError = mockError as AxiosError;
    (cartService.getCart as jest.Mock).mockRejectedValueOnce(axiosError);

    await expect(getCart(cartId)).rejects.toThrow(`${mockError}`);
    expect(cartService.getCart).toHaveBeenCalledWith(cartId);
  });
});
