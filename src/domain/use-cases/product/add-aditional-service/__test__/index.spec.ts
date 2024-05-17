import { renderHook } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { useAppSelector } from '@hooks/storeHooks';
import productService from '@services/product';
import useAddAditionalService from '..';
import WindowsEvents from '@components/events';

jest.mock('@hooks/storeHooks');
jest.mock('@services/product');

describe('useAddAditionalService', () => {
  const mockCartId = 'mock-cart-id';
  const mockProductId = 'mock-product-id';
  const mockProduct = {
    items: [
      {
        offering: {
          id: 'mock-service-id',
        },
      },
    ],
  };
  const mockAdditionalService = true;
  const mockCart = {
    items: [
      {
        product: {
          sku: mockProductId,
        },
      },
    ],
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValueOnce({
      cartId: mockCartId,
    });
    (useAppSelector as jest.Mock).mockReturnValueOnce({
      productId: mockProductId,
      product: mockProduct,
      additionalService: mockAdditionalService,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call productService.addAditionalService with the correct arguments', async () => {
    const mockAddAditionalService = jest.spyOn(
      productService,
      'addAditionalService',
    );
    renderHook(() => useAddAditionalService());

    fireEvent(
      document,
      new CustomEvent(WindowsEvents.GET_SHOPPING_CART, {
        detail: {
          shoppingCart: mockCart,
        },
      }),
    );

    expect(mockAddAditionalService).toHaveBeenCalledWith(
      expect.any(Number),
      mockCartId,
      mockProduct.items[0].offering.id,
    );
  });

  it('should call productService.addAditionalService and generate error', async () => {
    jest
      .spyOn(productService, 'addAditionalService')
      .mockRejectedValueOnce('error message');

    renderHook(() => useAddAditionalService());

    fireEvent(
      document,
      new CustomEvent(WindowsEvents.GET_SHOPPING_CART, {
        detail: {
          shoppingCart: mockCart,
        },
      }),
    );

    expect.assertions(0);
  });
});
