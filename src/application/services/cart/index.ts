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
  addService: (data, cartId, productIndex) => {
    return bffInstance.post(
      `/shoppingcart/${cartId}/items/${productIndex}/options`,
      data,
    );
  },
  deleteService: (cartId, productIndex, serviceId) => {
    return bffInstance.delete(
      `/shoppingcart/${cartId}/items/${productIndex}/options/${serviceId}`,
    );
  },
};
export default cartService;
