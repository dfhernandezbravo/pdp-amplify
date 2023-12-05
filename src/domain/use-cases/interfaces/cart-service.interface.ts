import { GetCart } from '@entities/cart/get-cart.response';
import { AxiosResponse } from 'axios';
interface CartService {
  getCart(cartId: string): Promise<AxiosResponse<GetCart>>;
}

export default CartService;
