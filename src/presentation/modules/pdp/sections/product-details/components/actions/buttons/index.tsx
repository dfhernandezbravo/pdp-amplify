import { Button } from '@cencosud-ds/easy-design-system';
import {
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
  GetCart as ShoppingCart,
} from '@entities/cart/get-cart.response';
import { Item } from '@entities/cart/item';
import { GetProduct as Product } from '@entities/product/get-product.response';
import { useAppDispatch } from '@hooks/storeHooks';
import { dispatchMinicartSimulateAddProductEvent } from '@use-cases/shopping-cart/dispatch-mini-cart-event';
import {
  addItemsShoppingCart,
  updateItemsShoppingCart,
} from '@use-cases/shopping-cart/save-items';
import React from 'react';

type Props = {
  quantity: number;
  product: Product;
  cartId: string | undefined;
  shoppingCart: ShoppingCart | undefined;
};

const Buttons = ({ quantity, cartId, shoppingCart, product }: Props) => {
  const dispatch = useAppDispatch();

  const addToCart = async (
    product: Product,
    cartId: string | undefined,
    shoppingCart: ShoppingCart | undefined,
  ) => {
    const addProduct = () => {
      const dataProduct: SaveShoppingCartItemsRequest = {
        orderItems: [
          {
            id: product.productId,
            quantity: quantity,
          },
        ],
      };

      dispatchMinicartSimulateAddProductEvent({ ...product });
      dispatch(
        addItemsShoppingCart({
          data: dataProduct,
          cartId: cartId!,
          quantity: quantity,
          productReferenceId: product.productId,
        }),
      );
    };

    const updateProduct = (productInCart: {
      index: number;
      quantity: number;
    }) => {
      const dataProduct: SetShoppingCartItemsRequest = {
        orderItems: [
          {
            quantity: productInCart.quantity,
            index: productInCart.index,
          },
        ],
      };

      dispatchMinicartSimulateAddProductEvent({ ...product });
      dispatch(
        updateItemsShoppingCart({
          data: dataProduct,
          cartId: cartId!,
          quantity: productInCart.quantity + quantity,
        }),
      );
    };

    const productInCart = await shoppingCart?.items?.find((item: Item) => {
      return item.product.id === product.productId;
    });
    const productIndex = await shoppingCart?.items?.findIndex(
      (item: Item) => item.product.id === product.productId,
    );

    if (productInCart) {
      const productToAdd = {
        quantity: productInCart.quantity + quantity,
        index: productIndex || 0,
      };
      return updateProduct(productToAdd);
    } else {
      addProduct();
    }
  };

  const buyNow = async () => {
    await addToCart(product, cartId, shoppingCart);
    if (process?.env?.NEXT_PUBLIC_CHECKOUT_URL)
      window.location.href = `${process?.env?.NEXT_PUBLIC_CHECKOUT_URL}${cartId}`;
  };

  return (
    <>
      <Button onClick={buyNow} variant="primary" label="Comprar ahora" />
      <Button
        onClick={() => addToCart(product, cartId, shoppingCart)}
        variant="secondary"
        label="Añadir al carro"
      />
    </>
  );
};

export default Buttons;
