// import { bffInstance } from '@data-source/bbf-instance';
import ProductService from '@use-cases/interfaces/product-service.interface';
import axios from 'axios';

const productService: ProductService = {
  // getProduct: async (productId) => {
  //   return bffInstance.get(`/products/${encodeURIComponent(productId)}`);
  // },

  getProduct: async (productId) => {
    return axios.get(`/api/catalog/products/byRefId/${productId}`);
  },
};
export default productService;
