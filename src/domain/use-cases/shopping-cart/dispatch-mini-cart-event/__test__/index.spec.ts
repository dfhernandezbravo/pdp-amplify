import WindowsEvents from '@components/events';
import { GetCart as ShoppingCart } from '@entities/cart/get-cart.response';
import { AddProductErrorEvent } from '@entities/events/mini-cart-event';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import {
  dispatchMiniCartAddProductEvent,
  dispatchMiniCartEvent,
  dispatchMinicartAddProductErrorEvent,
} from '..';

jest.mock('@store/events/dispatchEvents', () => ({
  customDispatchEvent: jest.fn(),
}));

describe('dispatchMiniCartEvent', () => {
  it('should dispatch the mini cart event with open set to true', () => {
    dispatchMiniCartEvent();

    expect(customDispatchEvent).toHaveBeenCalledWith({
      name: WindowsEvents.TOGGLE_CART_ASIDE,
      detail: {
        open: true,
      },
    });
  });
});

describe('dispatchMiniCartAddProductEvent', () => {
  it('should dispatch the mini cart add product event with the provided data', () => {
    const data = {
      // Provide the necessary properties for the data object
    };

    dispatchMiniCartAddProductEvent(data as ShoppingCart);

    expect(customDispatchEvent).toHaveBeenCalledWith({
      name: WindowsEvents.ADD_PRODUCT_IN_CART,
      detail: {
        data: data,
      },
    });
  });
});

describe('dispatchMinicartAddProductErrorEvent', () => {
  it('should dispatch the mini cart add product error event with the provided data', () => {
    const data = {
      // Provide the necessary properties for the data object
    };

    dispatchMinicartAddProductErrorEvent(data as AddProductErrorEvent);

    expect(customDispatchEvent).toHaveBeenCalledWith({
      name: WindowsEvents.ADD_PRODUCT_ERROR,
      detail: {
        data: data,
      },
    });
  });
});
