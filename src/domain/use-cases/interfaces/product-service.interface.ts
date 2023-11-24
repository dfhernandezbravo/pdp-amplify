import { GetProduct } from '@entities/product/get-product.response';
import { AxiosResponse } from 'axios';

interface ProductService {
  getProduct(productId: number): Promise<AxiosResponse<GetProduct>>;
}

export default ProductService;
