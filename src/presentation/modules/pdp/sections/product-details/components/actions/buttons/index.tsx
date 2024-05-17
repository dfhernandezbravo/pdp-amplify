import WindowsEvents from '@components/events';
import { AddItemShoppingCartEvent } from '@entities/events/add-to-cart-event';
import { EventType } from '@entities/events/ga-events';
import { GetProduct } from '@entities/product/get-product.response';
import { useAppSelector } from '@hooks/storeHooks';
import useGetId from '@hooks/useGetId';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import dynamic from 'next/dynamic';
import { ButtonsContainer } from './style';

const Button = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.button').then(
      (module) => module.Button,
    ),
  { ssr: false },
);

const Buttons = () => {
  const { variantSkuId, productRefId } = useGetId();
  const { cartId } = useAppSelector((state) => state.cart);
  const { product, selectedVariant, quantity, additionalService } =
    useAppSelector((state) => state.product);

  const { selectedColor } = useAppSelector((state) => state.tintometric);
  const { dispatchAddToCartEvent } = useDispatchProductEvent();

  const addToCart = async (product: GetProduct, cartId: string) => {
    if (selectedVariant) {
      const eventData: AddItemShoppingCartEvent = {
        cartId: cartId,
        product: {
          productId: product?.productId,
          id: selectedVariant?.itemId,
          productName: product?.productName,
          brand: product?.brand,
          imageUrl: product?.items?.[0]?.images[0].imageUrl,
          prices: product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices,
          quantity: quantity,
        },
      };

      if (selectedColor) {
        eventData.product.paintingCode = {
          code: selectedColor?.codeName,
          hexColor: selectedColor?.hexCode,
        };
      }

      customDispatchEvent({
        name: WindowsEvents.ADD_ITEM_SHOPPING_CART,
        detail: eventData,
      });

      dispatchAddToCartEvent({
        event: EventType.AddToCart,
        product: product,
        productRefId: productRefId || '',
        variantSkuId: variantSkuId || '',
        service: {
          serviceName: additionalService
            ? product?.items?.[0]?.offering?.name
            : '',
          serviceCost: additionalService
            ? product?.items?.[0]?.offering?.value
            : 0,
          isSelected: additionalService,
        },
      });
    }
  };

  const buyNow = async () => {
    if (product && cartId) await addToCart(product, cartId);
    if (process?.env?.NEXT_PUBLIC_CHECKOUT_URL)
      window.location.href = `${process?.env?.NEXT_PUBLIC_CHECKOUT_URL}${cartId}`;
  };

  return (
    <ButtonsContainer>
      <Button onClick={buyNow} variant="primary" label="Comprar ahora" />
      <Button
        onClick={() => product && cartId && addToCart(product, cartId)}
        variant="secondary"
        label="Añadir al carro"
      />
    </ButtonsContainer>
  );
};

export default Buttons;
