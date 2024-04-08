/* eslint-disable camelcase */
/* eslint-disable complexity */
import { useEvents } from '@hooks/useEvents';
import { ANALYTICS_EVENTS } from '../../../application/infra/events/analytics.';
import { Item } from '@entities/product/get-product.response';
import { findVariantSelected } from './map-event-detail';
import {
  BuildEventDetailArgs,
  DispatchEventArguments,
  ItemDetail,
} from '@entities/events/ga-events';

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
        variantSelected?.sellers?.[0]?.commertialOffer?.prices?.offerPrice ||
          variantSelected?.sellers?.[0]?.commertialOffer?.prices?.normalPrice,
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
