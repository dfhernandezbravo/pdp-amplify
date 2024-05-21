import { bffInstance } from '..';
import MockAdapter from 'axios-mock-adapter';
import Cookies from 'universal-cookie';

jest.mock('universal-cookie');

describe('bffInstance', () => {
  const ACCESS_TOKEN = 'access-token';
  const cartId = 'cart-id';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should set the base URL and headers correctly', () => {
    const baseUrl = process.env.NEXT_PUBLIC_BFF_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_BFF;

    expect(bffInstance.defaults.baseURL).toBe(baseUrl);

    expect(bffInstance.defaults.headers['x-api-key']).toBe(apiKey);
  });

  it('should add the access token to the request headers if available', async () => {
    jest.spyOn(Cookies.prototype, 'get').mockReturnValueOnce(ACCESS_TOKEN);

    const apiMock = new MockAdapter(bffInstance);

    apiMock.onGet(`/shoppingcart/${cartId}`).reply(200);

    const getShoppingCartMock = await bffInstance.get(
      `/shoppingcart/${cartId}`,
    );

    expect(getShoppingCartMock.config.headers.Authorization).toBe(
      `Bearer ${ACCESS_TOKEN}`,
    );
  });
});
