import { GetProduct, Item } from '@entities/product/get-product.response';

export type Service = {
  serviceName: string;
  serviceCost: number;
  isSelected: boolean;
};

export enum EventType {
  ViewItem = 'view_item',
  AddToCart = 'add_to_cart',
}

export type DispatchEventArguments = {
  event: EventType;
  product: GetProduct;
  productRefId: string;
  variantSkuId: string;
  service?: Service;
};

export type BuildEventDetailArgs = {
  event: EventType;
  product: GetProduct;
  productRefId: string;
  variantSelected?: Item | undefined;
  service?: Service | undefined;
};

export type ItemDetail = {
  item_id: string;
  item_name: string;
  discount: number;
  affiliation: string;
  item_brand: string;
  item_category: string;
  item_variant: string | number;
  price: number;
  list_price: number;
  cenco_price: number;
  item_list_id: string;
  currency: string;
  quantity: number;
  ribbons: string;
  service?: string;
  service_cost?: number;
};
