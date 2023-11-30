import { bffInstance } from '@data-source/bbf-instance';
import ProductService from '@use-cases/interfaces/product-service.interface';

const productService: ProductService = {
  getProduct: async (productId) => {
    return bffInstance.get(`/products/by-sku/${encodeURIComponent(productId)}`);
  },
};
export default productService;
