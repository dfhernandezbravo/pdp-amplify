import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import WindowsEvents from '@components/events';
import useEventListener from '@hooks/eventListenerHooks';
import { useAppSelector } from '@hooks/storeHooks';
import productService from '@services/product';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const useAddAditionalService = () => {
  const { cartId } = useAppSelector((state) => state.cart);
  const { productId, product, additionalService } = useAppSelector(
    (state) => state.product,
  );

  const addAditionalService = async (cart: ShoppingCart) => {
    const itemIndex = cart?.items?.findIndex((item) => {
      return item?.product?.sku === `${productId}`;
    });
    const serviceId = product?.items?.[0]?.offering?.id;
    if (itemIndex >= 0 && cartId && serviceId) {
      try {
        const newCart = await productService.addAditionalService(
          itemIndex,
          cartId,
          serviceId,
        );
        customDispatchEvent({
          name: WindowsEvents.UPDATE_SHOPPING_CART,
          detail: newCart,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEventListener(document, WindowsEvents.GET_SHOPPING_CART, (e) => {
    e.preventDefault();
    const customEvent = e as CustomEvent;
    const cart = customEvent?.detail?.shoppingCart;
    additionalService && cart && addAditionalService(cart);
  });
};

export default useAddAditionalService;
