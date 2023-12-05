import WindowsEvents from '@components/events';
import dispatchCartDataEvent from '@use-cases/shopping-cart/dispatch-cart-data-event';
import { useQuery } from 'react-query';
import { useCallback, useEffect } from 'react';
import getCart from '@use-cases/shopping-cart/get-shopping-cart';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCart, setCartId } from '@store/cart';

type Props = {
  children: React.ReactNode;
};

const CartEventLayout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.cart);

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

  useEffect(() => dispatchCartDataEvent(), []);

  useEffect(() => {
    document.addEventListener(WindowsEvents.CART_ID, updateCartId);
  }, [updateCartId]);

  const { data } = useQuery(
    ['get-cart', cartId],
    () => {
      if (cartId) return getCart(cartId);
    },
    { enabled: Boolean(cartId) },
  );

  useEffect(() => {
    if (data) dispatch(setCart(data));
  }, [data, dispatch]);

  return <>{children}</>;
};

export default CartEventLayout;
