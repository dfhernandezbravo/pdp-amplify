import {
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
}

export default CartService;
