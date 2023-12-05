import { bffInstance } from '@data-source/bbf-instance';
import CartService from '@use-cases/interfaces/cart-service.interface';

const cartService: CartService = {
  getCart: async (cartId) => {
    return bffInstance.get(`/shoppingcart/${encodeURIComponent(cartId)}`);
  },
};
export default cartService;
