import { GetCart } from '@entities/cart/get-cart.response';
import { GetColors } from '@entities/product/get-colors.response';
import { GetProduct } from '@entities/product/get-product.response';
import { AxiosResponse } from 'axios';

interface ProductService {
  getProduct(
    productId: number,
    accessToken?: string,
  ): Promise<AxiosResponse<GetProduct>>;
  getColors(): Promise<AxiosResponse<GetColors>>;
  addAditionalService(
    itemIndex: number,
    cartId: string,
    serviceId: string,
  ): Promise<GetCart>;
}

export default ProductService;
