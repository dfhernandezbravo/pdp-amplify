import WindowsEvents from '@components/events';
import { AddItemShoppingCartEvent } from '@entities/events/add-to-cart-event';
import { GetProduct } from '@entities/product/get-product.response';
import { useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import dynamic from 'next/dynamic';

const Button = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.button').then(
      (module) => module.Button,
    ),
  { ssr: false },
);

type Props = {
  quantity: number;
};

const Buttons = ({ quantity }: Props) => {
  const { cartId } = useAppSelector((state) => state.cart);
  const { product, selectedVariant } = useAppSelector((state) => state.product);

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

      customDispatchEvent({
        name: WindowsEvents.ADD_ITEM_SHOPPING_CART,
        detail: eventData,
      });
    }
  };

  const buyNow = async () => {
    if (product && cartId) await addToCart(product, cartId);
    if (process?.env?.NEXT_PUBLIC_CHECKOUT_URL)
      window.location.href = `${process?.env?.NEXT_PUBLIC_CHECKOUT_URL}${cartId}`;
  };

  return (
    <>
      <Button onClick={buyNow} variant="primary" label="Comprar ahora" />
      <Button
        onClick={() => product && cartId && addToCart(product, cartId)}
        variant="secondary"
        label="Añadir al carro"
      />
    </>
  );
};

export default Buttons;
