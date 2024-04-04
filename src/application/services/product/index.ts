import { bffInstance } from '@data-source/bbf-instance';
import ProductService from '@use-cases/interfaces/product-service.interface';

const productService: ProductService = {
  getProduct: (productId, accessToken) => {
    return bffInstance.get(
      `/products/by-sku/${encodeURIComponent(productId)}`,
      {
        baseURL: process.env.NEXT_PUBLIC_BFF_URL,
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
  },
  getColors: () => {
    return bffInstance.get('/cms/group/Tintometric/colors');
  },
};
export default productService;
