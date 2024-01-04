import WindowsEvents from '@components/events';
import { useCallback, useEffect } from 'react';
import getCart from '@use-cases/shopping-cart/get-shopping-cart';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCart, setCartId } from '@store/cart';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { ShoppingCart } from '@cencosud-ds/easy-design-system';

type Props = {
  children: React.ReactNode;
};

const CartEventProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.cart);

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART_ID,
      detail: {},
    });
  }, []);

  const updateCartId = useCallback(
    (e: Event) => {
      e.preventDefault();
      const {
        detail: { cartId },
      } = e as CustomEvent<{ cartId: string }>;
      if (cartId) dispatch(setCartId(cartId));
    },
    [dispatch],
  );

  const updateShoppingCart = useCallback(
    (e: Event) => {
      e.preventDefault();
      const {
        detail: { shoppingCart },
      } = e as CustomEvent<{ shoppingCart: ShoppingCart }>;
      if (cartId) dispatch(setCart(shoppingCart));
    },
    [dispatch],
  );

  useEffect(() => {
    document.addEventListener(WindowsEvents.GET_CART_ID, updateCartId);
    document.addEventListener(
      WindowsEvents.GET_SHOPPING_CART,
      updateShoppingCart,
    );
  }, []);

  useEffect(() => {
    document.addEventListener(WindowsEvents.CART_HEADER, async () => {
      if (cartId) {
        const data = await getCart(cartId);
        if (data) {
          dispatch(setCart(data));
        }
      }
    });
  }, [cartId]);

  return <>{children}</>;
};

export default CartEventProvider;
