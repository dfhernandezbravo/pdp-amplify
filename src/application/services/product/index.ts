import { bffInstance } from '@data-source/bbf-instance';
import ProductService from '@interfaces/product-service.interface';

const productService: ProductService = {
  getProduct: (productId) => {
    return bffInstance.get(
      `/products/by-sku/${encodeURIComponent(productId)}`,
      // {
      //   baseURL: process.env.NEXT_PUBLIC_BFF_URL,
      // },
    );
  },
  getColors: () => {
    return bffInstance.get('/cms/group/Tintometric/colors');
  },
  addAditionalService: (itemIndex, cartId, serviceId) => {
    return bffInstance.post(
      `/shoppingcart/${cartId}/items/${itemIndex}/options`,
      {
        id: serviceId,
      },
    );
  },
};
export default productService;
