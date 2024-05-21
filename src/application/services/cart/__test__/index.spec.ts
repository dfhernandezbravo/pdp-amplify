import { bffInstance } from '@data-source/bff-instance';
import {
  AddServiceRequest,
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@entities/cart/get-cart.response';
import MockAdapter from 'axios-mock-adapter';
import cartService from '..';

jest.mock('@data-source/bff-instance');

describe('cartService', () => {
  const cartId = 'cart-id';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call bffInstance.get with the correct URL when calling getCart', async () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onGet(`/shoppingcart/${cartId}`).replyOnce(200);

    await cartService.getCart(cartId);

    expect(bffInstance.get).toHaveBeenCalledWith(
      `/shoppingcart/${encodeURIComponent(cartId)}`,
    );
  });

  it('should call bffInstance.post with the correct URL and data when calling addItem', () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onPost(`/shoppingcart/${cartId}/items`).reply(200);
    const data: SaveShoppingCartItemsRequest = {
      orderItems: [
        {
          id: 'product-id',
          quantity: 1,
        },
      ],
    };

    cartService.addItem(data, cartId);

    expect(bffInstance.post).toHaveBeenCalledWith(
      `/shoppingcart/${cartId}/items`,
      data,
    );
  });

  it('should call bffInstance.patch with the correct URL and data when calling updateItem', () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onPatch(`/shoppingcart/${cartId}/items`).reply(200);

    const data: SetShoppingCartItemsRequest = {
      orderItems: [
        {
          index: 1,
          quantity: 1,
        },
      ],
    };

    cartService.updateItem(data, cartId);

    expect(bffInstance.patch).toHaveBeenCalledWith(
      `/shoppingcart/${cartId}/items`,
      data,
    );
  });

  it('should call bffInstance.post with the correct URL, data, and productIndex when calling addService', () => {
    const apiMock = new MockAdapter(bffInstance);
    const productIndex = 0;

    apiMock
      .onPatch(`/shoppingcart/${cartId}/items/${productIndex}/options`)
      .reply(200);

    const data: AddServiceRequest = {
      id: 'service-id',
    };

    cartService.addService(data, cartId, productIndex);

    expect(bffInstance.post).toHaveBeenCalledWith(
      `/shoppingcart/${cartId}/items/${productIndex}/options`,
      data,
    );
  });

  it('should call bffInstance.delete with the correct URL, cartId, productIndex, and serviceId when calling deleteService', () => {
    const apiMock = new MockAdapter(bffInstance);
    const productIndex = 0;
    const serviceId = 'service-id';

    apiMock
      .onPatch(
        `/shoppingcart/${cartId}/items/${productIndex}/options/${serviceId}`,
      )
      .reply(200);

    cartService.deleteService(cartId, productIndex, serviceId);

    expect(bffInstance.delete).toHaveBeenCalledWith(
      `/shoppingcart/${cartId}/items/${productIndex}/options/${serviceId}`,
    );
  });
});
