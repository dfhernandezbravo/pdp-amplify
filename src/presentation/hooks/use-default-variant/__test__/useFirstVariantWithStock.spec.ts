import { renderHook } from '@testing-library/react';
import useFirstVariantWithStock from '../useFirstVariantWithStock';
import { Item } from '@entities/product/get-product.response';

describe('useFirstVariantWithStock', () => {
  it('should return undefined when items is undefined', () => {
    const { result } = renderHook(() => useFirstVariantWithStock(undefined));
    expect(result.current).toBeUndefined();
  });

  it('should return the first variant with stock when available', () => {
    const items = [
      {
        sellers: [
          {
            commertialOffer: {
              availableQuantity: 0,
            },
          },
        ],
      },
      {
        sellers: [
          {
            commertialOffer: {
              availableQuantity: 5,
            },
          },
        ],
      },
      {
        sellers: [
          {
            commertialOffer: {
              availableQuantity: 10,
            },
          },
        ],
      },
    ];

    const { result } = renderHook(() =>
      useFirstVariantWithStock(items as Item[]),
    );
    expect(result.current).toEqual(items[1]);
  });

  it('should return the first variant when no variant has stock', () => {
    const items = [
      {
        sellers: [
          {
            commertialOffer: {
              availableQuantity: 0,
            },
          },
        ],
      },
      {
        sellers: [
          {
            commertialOffer: {
              availableQuantity: 0,
            },
          },
        ],
      },
    ];

    const { result } = renderHook(() =>
      useFirstVariantWithStock(items as Item[]),
    );
    expect(result.current).toEqual(items[0]);
  });
});
