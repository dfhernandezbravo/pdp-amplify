import { GetProduct } from '@entities/product/get-product.response';
import { GetColors } from '@entities/product/get-colors.response';
import { AxiosResponse } from 'axios';
import { ShoppingCart } from '@cencosud-ds/easy-design-system';

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
  ): Promise<ShoppingCart>;
}

export default ProductService;
