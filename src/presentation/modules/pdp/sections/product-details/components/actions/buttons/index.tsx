import { Button } from '@cencosud-ds/easy-design-system';
import WindowsEvents from '@components/events';
import { AddItemShoppingCartEvent } from '@entities/events/add-to-cart-event';
import { GetProduct } from '@entities/product/get-product.response';
import { useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { useSearchParams } from 'next/navigation';


type Props = {
  quantity: number;
  product: GetProduct;
};

const Buttons = ({ quantity, product }: Props) => {
  const { cartId } = useAppSelector((state) => state.cart);
  const searchParams = useSearchParams();

  const selectedSkuId = searchParams?.get('skuId');

  const addToCart = async (product: GetProduct, cartId: string | undefined) => {
    const eventData: AddItemShoppingCartEvent = {
      cartId: cartId,
      product: {
        productId: selectedSkuId ?? product.productId,
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
  };

  const buyNow = async () => {
    await addToCart(product, cartId);
    if (process?.env?.NEXT_PUBLIC_CHECKOUT_URL)
      window.location.href = `${process?.env?.NEXT_PUBLIC_CHECKOUT_URL}${cartId}`;
  };

  return (
    <>
      <Button onClick={buyNow} variant="primary" label="Comprar ahora" />
      <Button
        onClick={() => addToCart(product, cartId)}
        variant="secondary"
        label="Añadir al carro"
      />
    </>
  );
};

export default Buttons;
