import WindowsEvents from '@components/events';
import dispatchCartHeaderEvent from '..';
import { customDispatchEvent } from '@store/events/dispatchEvents';

jest.mock('@store/events/dispatchEvents', () => ({
  customDispatchEvent: jest.fn(),
}));

describe('dispatchCartHeaderEvent', () => {
  it('should dispatch the cart header event with the correct payload', () => {
    const mockQuantity = 5;

    dispatchCartHeaderEvent({ quantity: mockQuantity });

    expect(customDispatchEvent).toHaveBeenCalledWith({
      name: WindowsEvents.CART_HEADER,
      detail: {
        isShoppingCartUsed: true,
        quantityItems: mockQuantity,
      },
    });
  });
});
