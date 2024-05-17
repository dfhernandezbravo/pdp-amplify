/* eslint-disable max-lines */
/* eslint-disable camelcase */
import { EventType } from '@entities/events/ga-events';
import { buildEventDetail, findVariantSelected } from '../map-event-detail';
import { productMock } from './__mocks__/product-cart';
import { productMockWithoutOffer } from './__mocks__/product-without-offer';
import { productMockWithoutAdjustments } from './__mocks__/product-without-adjustments';

describe('buildEventDetail', () => {
  const PRODUCT_REF_ID = '123';
  const VARIANT_SKU_ID = 'item-id';
  const SERVICE_NAME = 'Test Service';
  const SERVICE_COST = 100;
  const CURRENCY = 'CLP';
  const ITEM_LIST_ID = 'pdp';
  const AFFILIATION = 'Easy';

  it('should build the event detail correctly', () => {
    const variantSelected = findVariantSelected(productMock, VARIANT_SKU_ID);

    const eventArgs = {
      event: EventType.ViewItem,
      product: productMock,
      productRefId: PRODUCT_REF_ID,
      variantSelected,
      service: {
        serviceName: SERVICE_NAME,
        serviceCost: SERVICE_COST,
        isSelected: true,
      },
    };

    const expectedDetail = {
      event: EventType.ViewItem,
      ecommerce: {
        currency: CURRENCY,
        items: [
          {
            item_id: PRODUCT_REF_ID,
            item_name: productMock.productName,
            affiliation: AFFILIATION,
            item_brand: productMock.brand,
            item_category: productMock.categories[0],
            item_list_id: ITEM_LIST_ID,
            quantity: 1,
            service: SERVICE_NAME,
            service_cost: SERVICE_COST,
            ribbons: '',
            currency:
              productMock.items[0].sellers[0].commertialOffer.prices.currency,
            item_variant: productMock.items[0].referenceId[0].Value,
            discount:
              productMock.items[0].sellers[0].commertialOffer.adjustments[0]
                .value,
            price:
              productMock.items[0].sellers[0].commertialOffer.prices.offerPrice,
            list_price:
              productMock.items[0].sellers[0].commertialOffer.prices
                .normalPrice,
            cenco_price: 0,
          },
        ],
        value: 0,
      },
    };

    const result = buildEventDetail(eventArgs);

    expect(result).toEqual(expectedDetail);
  });

  it('should build the event detail correctly without offer', () => {
    const variantSelected = findVariantSelected(
      productMockWithoutOffer,
      VARIANT_SKU_ID,
    );

    const eventArgs = {
      event: EventType.ViewItem,
      product: productMockWithoutOffer,
      productRefId: PRODUCT_REF_ID,
      variantSelected,
      service: {
        serviceName: SERVICE_NAME,
        serviceCost: SERVICE_COST,
        isSelected: false,
      },
    };

    const expectedDetail = {
      event: EventType.ViewItem,
      ecommerce: {
        currency:
          productMockWithoutOffer.items[0].sellers[0].commertialOffer.prices
            .currency,
        items: [
          {
            item_id: PRODUCT_REF_ID,
            item_name: productMockWithoutOffer.productName,
            affiliation: AFFILIATION,
            item_brand: productMockWithoutOffer.brand,
            item_category: productMockWithoutOffer.categories[0],
            item_list_id: ITEM_LIST_ID,
            quantity: 1,
            ribbons: '',
            currency:
              productMockWithoutOffer.items[0].sellers[0].commertialOffer.prices
                .currency,
            item_variant: productMockWithoutOffer.items[0].referenceId[0].Value,
            discount:
              productMockWithoutOffer.items[0].sellers[0].commertialOffer
                .adjustments[0].value,
            price:
              productMockWithoutOffer.items[0].sellers[0].commertialOffer.prices
                .normalPrice,
            list_price:
              productMockWithoutOffer.items[0].sellers[0].commertialOffer.prices
                .normalPrice,
            cenco_price: 0,
          },
        ],
        value:
          productMockWithoutOffer.items[0].sellers[0].commertialOffer.prices
            .brandPrice,
      },
    };

    const result = buildEventDetail(eventArgs);

    expect(result).toEqual(expectedDetail);
  });

  it('should build the event detail correctly without adjustments', () => {
    const variantSelected = findVariantSelected(
      productMockWithoutAdjustments,
      VARIANT_SKU_ID,
    );

    const eventArgs = {
      event: EventType.ViewItem,
      product: productMockWithoutAdjustments,
      productRefId: PRODUCT_REF_ID,
      variantSelected,
      service: {
        serviceName: SERVICE_NAME,
        serviceCost: SERVICE_COST,
        isSelected: false,
      },
    };

    const expectedDetail = {
      event: EventType.ViewItem,
      ecommerce: {
        currency:
          productMockWithoutAdjustments.items[0].sellers[0].commertialOffer
            .prices.currency,
        items: [
          {
            item_id: PRODUCT_REF_ID,
            item_name: productMockWithoutAdjustments.productName,
            affiliation: AFFILIATION,
            item_brand: productMockWithoutAdjustments.brand,
            item_category: productMockWithoutAdjustments.categories[0],
            item_list_id: ITEM_LIST_ID,
            quantity: 1,
            ribbons: '',
            currency:
              productMockWithoutAdjustments.items[0].sellers[0].commertialOffer
                .prices.currency,
            item_variant:
              productMockWithoutAdjustments.items[0].referenceId[0].Value,
            discount: 0,
            price:
              productMockWithoutAdjustments.items[0].sellers[0].commertialOffer
                .prices.normalPrice,
            list_price:
              productMockWithoutAdjustments.items[0].sellers[0].commertialOffer
                .prices.normalPrice,
            cenco_price: 0,
          },
        ],
        value:
          productMockWithoutAdjustments.items[0].sellers[0].commertialOffer
            .prices.brandPrice,
      },
    };

    const result = buildEventDetail(eventArgs);

    expect(result).toEqual(expectedDetail);
  });
});
