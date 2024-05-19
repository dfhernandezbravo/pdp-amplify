import cartService from '@services/cart';
import { addService, deleteService } from '..';

jest.mock('@services/cart');

describe('addService', () => {
  it('should add a service to the cart', async () => {
    const cartId = 'cartId';
    const productIndex = 0;
    const serviceId = 'serviceId';
    const responseData = {
      /* mock response data */
    };

    (cartService.addService as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    const result = await addService(cartId, productIndex, serviceId);

    expect(cartService.addService).toHaveBeenCalledWith(
      { id: serviceId },
      cartId,
      productIndex,
    );
    expect(result).toEqual(responseData);
  });

  it('should throw an error if adding service fails', async () => {
    const cartId = 'cartId';
    const productIndex = 0;
    const serviceId = 'serviceId';
    const error = new Error('Failed to add service');

    (cartService.addService as jest.Mock).mockRejectedValueOnce(error);

    await expect(addService(cartId, productIndex, serviceId)).rejects.toThrow(
      `${error}`,
    );
  });
});

describe('deleteService', () => {
  it('should delete a service from the cart', async () => {
    const cartId = 'cartId';
    const productIndex = 0;
    const serviceId = 'serviceId';
    const responseData = {
      /* mock response data */
    };

    (cartService.deleteService as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    const result = await deleteService(cartId, productIndex, serviceId);

    expect(cartService.deleteService).toHaveBeenCalledWith(
      cartId,
      productIndex,
      serviceId,
    );
    expect(result).toEqual(responseData);
  });

  it('should throw an error if deleting service fails', async () => {
    const cartId = 'cartId';
    const productIndex = 0;
    const serviceId = 'serviceId';
    const error = new Error('Failed to delete service');

    (cartService.deleteService as jest.Mock).mockRejectedValueOnce(error);

    await expect(
      deleteService(cartId, productIndex, serviceId),
    ).rejects.toThrow(`${error}`);
  });
});
