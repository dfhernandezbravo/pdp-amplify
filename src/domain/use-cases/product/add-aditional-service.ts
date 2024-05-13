import WindowsEvents from '@components/events';
import { GetCart } from '@entities/cart/get-cart.response';
import useEventListener from '@hooks/eventListenerHooks';
import { useAppSelector } from '@hooks/storeHooks';
import productService from '@services/product';

const useAddAditionalService = () => {
  const { cartId } = useAppSelector((state) => state.cart);
  const { productId, product, additionalService } = useAppSelector(
    (state) => state.product,
  );

  const addAditionalService = async (cart: GetCart) => {
    const itemIndex = cart?.items?.findIndex((item) => {
      return item?.product?.sku === `${productId}`;
    });
    const serviceId = product?.items?.[0]?.offering?.id;
    if (itemIndex >= 0 && cartId && serviceId) {
      try {
        await productService.addAditionalService(itemIndex, cartId, serviceId);
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
