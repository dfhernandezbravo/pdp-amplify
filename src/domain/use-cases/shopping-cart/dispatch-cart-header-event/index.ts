import WindowsEvents from '@components/events';
import { CartHeaderEventPayload } from '@entities/events/cart-header-event';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const dispatchCartHeaderEvent = (params: { quantity: number }) => {
  customDispatchEvent<CartHeaderEventPayload>({
    name: WindowsEvents.CART_HEADER,
    detail: {
      isShoppingCartUsed: true,
      quantityItems: params.quantity,
    },
  });
};

export default dispatchCartHeaderEvent;
