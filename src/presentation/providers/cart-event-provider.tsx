import WindowsEvents from '@components/events';
import { GetCart as ShoppingCart } from '@entities/cart/get-cart.response';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCart, setCartId } from '@store/cart';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { setProduct } from '@store/product';
import { getProduct } from '@use-cases/product/get-product';
import getCart from '@use-cases/shopping-cart/get-shopping-cart';
import { useCallback, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const CartEventProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { cartId } = useAppSelector((state) => state.cart);
  const { productId } = useAppSelector((state) => state.product);

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

  const updateProduct = useCallback(
    (e: Event) => {
      e.preventDefault();
    },
    [dispatch],
  );

  useEffect(() => {
    document.addEventListener(WindowsEvents.GET_CART_ID, updateCartId);
    document.addEventListener(
      WindowsEvents.GET_SHOPPING_CART,
      updateShoppingCart,
    );
    document.addEventListener(
      WindowsEvents.UPDATE_SHIPPING_CART,
      updateProduct,
    );
  }, []);

  useEffect(() => {
    document.addEventListener(WindowsEvents.UPDATE_SHIPPING_CART, async () => {
      if (productId) {
        const product = await getProduct(productId);
        dispatch(setProduct(product));
      }
    });
  }, [productId]);

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

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART_ID,
      detail: {},
    });
  }, []);

  return <>{children}</>;
};

export default CartEventProvider;
