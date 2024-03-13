import { GetProduct } from '@entities/product/get-product.response';
import { GetColors } from '@entities/product/get-colors.response';
import { AxiosResponse } from 'axios';

interface ProductService {
  getProduct(productId: number): Promise<AxiosResponse<GetProduct>>;
  getColors(): Promise<AxiosResponse<GetColors>>;
}

export default ProductService;
