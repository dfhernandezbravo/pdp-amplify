import { GetCart as ShoppingCart } from '@entities/cart/get-cart.response';
import { GetProduct as Product } from '@entities/product/get-product.response';

export type MiniCartEventPayload = {
  open: boolean;
};

export type MinicartAddProductEvent = {
  data: ShoppingCart;
};

export type MinicartSimulateAddProductEvent = {
  product: Product;
};

type ResponseError = {
  error: string;
  errorCode: string;
  message: string;
  statusCode: number;
};

export type AddProductErrorEvent = {
  error: ResponseError;
  itemId: string;
};

export type MiniCartAddProductErrorEvent = {
  data: AddProductErrorEvent;
};
