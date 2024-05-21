import {
  AddServiceRequest,
  GetCart,
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@entities/cart/get-cart.response';
import { AxiosResponse } from 'axios';
interface CartService {
  getCart(cartId: string): Promise<AxiosResponse<GetCart>>;
  addItem(
    data: SaveShoppingCartItemsRequest,
    cartId: string,
  ): Promise<AxiosResponse<GetCart>>;
  updateItem(
    data: SetShoppingCartItemsRequest,
    cartId: string,
  ): Promise<AxiosResponse<GetCart>>;
  addService(
    data: AddServiceRequest,
    cartId: string,
    productIndex: number,
  ): Promise<AxiosResponse<GetCart>>;
  deleteService(
    cartId: string,
    productIndex: number,
    serviceId: string,
  ): Promise<AxiosResponse<GetCart>>;
}

export default CartService;
