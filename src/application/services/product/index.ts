import { bffInstance } from '@data-source/bbf-instance';
import ProductService from '@use-cases/interfaces/product-service.interface';

const productService: ProductService = {
  getProduct: async (productId: number, accessToken?: string) => {
    bffInstance.interceptors.request.use(
      (config) => {
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
      },
      (err) => {
        throw new Error(err);
      },
    );

    return bffInstance.get(`/products/by-sku/${encodeURIComponent(productId)}`);
  },
  getColors: async () => {
    return bffInstance.get('/cms/group/Tintometric/colors');
  },
};
export default productService;
