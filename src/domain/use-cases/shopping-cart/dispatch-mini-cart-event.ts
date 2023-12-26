import WindowsEvents from '@components/events';
import { GetCart as ShoppingCart } from '@entities/cart/get-cart.response';
import {
  AddProductErrorEvent,
  MiniCartAddProductErrorEvent,
  MiniCartEventPayload,
  MinicartAddProductEvent,
  MinicartSimulateAddProductEvent,
} from '@entities/events/mini-cart-event';
import { Product } from '@entities/product/product';
import { customDispatchEvent } from '@store/events/dispatchEvents';

export const dispatchMiniCartEvent = () => {
  customDispatchEvent<MiniCartEventPayload>({
    name: WindowsEvents.TOGGLE_CART_ASIDE,
    detail: {
      open: true,
    },
  });
};

export const dispatchMiniCartAddProductEvent = (data: ShoppingCart) => {
  customDispatchEvent<MinicartAddProductEvent>({
    name: WindowsEvents.ADD_PRODUCT_IN_CART,
    detail: {
      data: data,
    },
  });
};

export const dispatchMinicartSimulateAddProductEvent = (data: Product) => {
  customDispatchEvent<MinicartSimulateAddProductEvent>({
    name: WindowsEvents.SIMULATE_ADD_PRODUCT,
    detail: {
      product: data,
    },
  });
};

export const dispatchMinicartAddProductErrorEvent = (
  data: AddProductErrorEvent,
) => {
  customDispatchEvent<MiniCartAddProductErrorEvent>({
    name: WindowsEvents.ADD_PRODUCT_ERROR,
    detail: {
      data,
    },
  });
};
