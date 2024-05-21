/* eslint-disable max-lines */
/* eslint-disable camelcase */
import { DispatchEventArguments, EventType } from '@entities/events/ga-events';
import { ANALYTICS_EVENTS } from '@infra/events/analytics';
import { useDispatchProductEvent } from '..';
import { productMock } from './__mocks__/product-cart';

const dispatchEventMock = jest.fn();
jest.mock('@hooks/use-events', () => ({
  useEvents: () => ({
    dispatchEvent: dispatchEventMock,
  }),
}));

describe('useDispatchProductEvent', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should dispatch view item event', () => {
    const { dispatchViewItemEvent } = useDispatchProductEvent();
    const args: DispatchEventArguments = {
      event: EventType.ViewItem,
      product: productMock,
      productRefId: '123',
      variantSkuId: '456',
      service: {
        serviceName: 'Test Service',
        serviceCost: 100,
        isSelected: true,
      },
    };

    dispatchViewItemEvent(args);

    expect(dispatchEventMock).toHaveBeenCalledWith({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event: 'view_item',
        ecommerce: {
          currency: '',
          items: [
            {
              item_id: '123',
              item_name: productMock.productName,
              discount: 0,
              affiliation: 'Easy',
              item_brand: productMock.brand,
              item_category: productMock.categories[0],
              item_variant: 0,
              price: 0,
              list_price: 0,
              cenco_price: 0,
              item_list_id: 'pdp',
              currency: '',
              quantity: 1,
              ribbons: '',
              service: 'Test Service',
              service_cost: 100,
            },
          ],
          value: undefined,
        },
      },
    });
  });

  it('should dispatch add to cart event', () => {
    const { dispatchAddToCartEvent } = useDispatchProductEvent();
    const args: DispatchEventArguments = {
      event: EventType.AddToCart,
      product: productMock,
      productRefId: '123',
      variantSkuId: '456',
      service: {
        serviceName: 'Test Service',
        serviceCost: 100,
        isSelected: true,
      },
    };

    dispatchAddToCartEvent(args);

    expect(dispatchEventMock).toHaveBeenCalledWith({
      name: ANALYTICS_EVENTS.Analytics,
      detail: {
        event: 'add_to_cart',
        ecommerce: {
          currency: '',
          items: [
            {
              item_id: '123',
              item_name: productMock.productName,
              discount: 0,
              affiliation: 'Easy',
              item_brand: productMock.brand,
              item_category: productMock.categories[0],
              item_variant: 0,
              price: 0,
              list_price: 0,
              cenco_price: 0,
              item_list_id: 'pdp',
              currency: '',
              quantity: 1,
              ribbons: '',
              service: 'Test Service',
              service_cost: 100,
            },
          ],
          value: undefined,
        },
      },
    });
  });
});
