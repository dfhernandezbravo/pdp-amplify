/* eslint-disable camelcase */
/* eslint-disable complexity */
import { DispatchEventArguments } from '@entities/events/ga-events';
import { useEvents } from '@hooks/useEvents';
import { ANALYTICS_EVENTS } from '@infra/events/analytics';
import { buildEventDetail, findVariantSelected } from './map-event-detail';

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
