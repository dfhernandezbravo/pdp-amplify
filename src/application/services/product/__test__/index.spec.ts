import { bffInstance } from '@data-source/bff-instance';
import MockAdapter from 'axios-mock-adapter';
import productService from '..';

jest.mock('@data-source/bff-instance');

describe('productService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call bffInstance.get with the correct URL when calling getProducts', async () => {
    const apiMock = new MockAdapter(bffInstance);
    const productId = 1;

    apiMock.onGet(`/products/by-sku/${productId}`).reply(200);
    await productService.getProduct(productId);

    expect(bffInstance.get).toHaveBeenCalledWith(
      `/products/by-sku/${encodeURIComponent(productId)}`,
    );
  });

  it('should call bffInstance.get with the correct URL when calling getColors', async () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onGet('/cms/group/Tintometric/colors').reply(200);
    await productService.getColors();

    expect(bffInstance.get).toHaveBeenCalledWith(
      '/cms/group/Tintometric/colors',
    );
  });

  it('should call bffInstance.post with the correct URL and data when calling addAditionalService', async () => {
    const apiMock = new MockAdapter(bffInstance);
    const itemIndex = 1;
    const cartId = '1';
    const serviceId = '1';

    apiMock
      .onPost(`/shoppingcart/${cartId}/items/${itemIndex}/options`)
      .reply(200);
    await productService.addAditionalService(itemIndex, cartId, serviceId);

    expect(bffInstance.post).toHaveBeenCalledWith(
      `/shoppingcart/${cartId}/items/${itemIndex}/options`,
      {
        id: serviceId,
      },
    );
  });
});
