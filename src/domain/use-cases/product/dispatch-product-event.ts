/* eslint-disable camelcase */
/* eslint-disable complexity */
import { useEvents } from '@hooks/useEvents';
import { ANALYTICS_EVENTS } from '../../../application/infra/events/analytics.';
import { GetProduct, Item } from '@entities/product/get-product.response';

type Service = {
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

type BuildEventDetailArgs = {
  event: EventType;
  product: GetProduct;
  productRefId: string;
  variantSelected?: Item | undefined;
  service?: Service | undefined;
};
interface ItemDetail {
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
}

function findVariantSelected(
  product: GetProduct,
  variantSkuId: string,
): Item | undefined {
  return product?.items.find((item) => item.itemId === variantSkuId);
}

function buildEventDetail({
  event,
  product,
  productRefId,
  variantSelected,
  service,
}: BuildEventDetailArgs & { variantSelected?: Item }) {
  let itemsDetail: ItemDetail = {
    item_id: productRefId || '',
    item_name: product?.productName || '',
    discount:
      Number(
        variantSelected?.sellers?.[0]?.commertialOffer?.adjustments?.[0]?.value,
      ) || 0,
    affiliation: 'Easy',
    item_brand: product.brand || '',
    item_category: product?.categories?.[0] || '',
    item_variant: variantSelected?.referenceId?.[0]?.Value || 0,
    price:
      Number(
        variantSelected?.sellers?.[0]?.commertialOffer?.prices?.brandPrice,
      ) || 0,
    list_price:
      Number(
        variantSelected?.sellers?.[0]?.commertialOffer?.prices?.normalPrice,
      ) || 0,
    cenco_price:
      Number(
        variantSelected?.sellers?.[0]?.commertialOffer?.prices?.brandPrice,
      ) || 0,
    item_list_id: 'pdp',
    currency:
      variantSelected?.sellers?.[0]?.commertialOffer?.prices?.currency || '',
    quantity: 1,
    ribbons: product?.ribbons?.map((ribbon) => ribbon.value).join(',') || '',
  };

  if (service?.isSelected) {
    itemsDetail = {
      ...itemsDetail,
      service: service.serviceName,
      service_cost: service.serviceCost,
    };
  }

  return {
    event,
    ecommerce: {
      currency:
        variantSelected?.sellers?.[0]?.commertialOffer?.prices?.currency || '',
      items: [itemsDetail],
      value: variantSelected?.sellers?.[0]?.commertialOffer?.prices?.brandPrice,
    },
  };
}

export function useDispatchProductEvent() {
  const { dispatchEvent } = useEvents();

  function dispatchProductEvent(args: DispatchEventArguments) {
    const { event, product, productRefId, variantSkuId, service } = args;
    const variantSelected = findVariantSelected(product, variantSkuId);
    const eventDetail = buildEventDetail({
      event,
      product,
      productRefId,
      variantSelected,
      service,
    });

    return dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: eventDetail,
    });
  }

  return {
    dispatchViewItemEvent: dispatchProductEvent,
    dispatchAddToCartEvent: dispatchProductEvent,
  };
}
