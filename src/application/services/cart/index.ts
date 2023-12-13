import { bffInstance } from '@data-source/bbf-instance';
import CartService from '@use-cases/interfaces/cart-service.interface';

const cartService: CartService = {
  getCart: async (cartId) => {
    return bffInstance.get(`/shoppingcart/${encodeURIComponent(cartId)}`);
  },
  addItem: (data, cartId) => {
    return bffInstance.post(`/shoppingcart/${cartId}/items`, data);
  },
  updateItem: (data, cartId) => {
    return bffInstance.patch(`/shoppingcart/${cartId}/items`, data);
  },
};
export default cartService;
