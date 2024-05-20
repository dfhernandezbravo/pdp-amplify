import { Item } from '@entities/product/get-product.response';
import { useRouter } from 'next/router';
import useFirstVariantWithStock from '../useFirstVariantWithStock';
import useDefaultVariant from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../useFirstVariantWithStock', () => jest.fn());

describe('useDefaultVariant', () => {
  const mockItems = [
    { itemId: '1', name: 'Item 1' },
    { itemId: '2', name: 'Item 2' },
    { itemId: '3', name: 'Item 3' },
  ];

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { skuId: '2' },
    });
    (useFirstVariantWithStock as jest.Mock).mockReturnValue(mockItems[1]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the item with matching skuId if it exists', () => {
    const result = useDefaultVariant(mockItems as Item[]);
    expect(result).toEqual(mockItems[1]);
  });

  it('should return the first variant with stock if skuId is not provided', () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
    });
    const result = useDefaultVariant(mockItems as Item[]);
    expect(result).toEqual(mockItems[1]);
  });

  it('should return undefined if items array is undefined', () => {
    const result = useDefaultVariant(undefined);
    expect(result).toBeUndefined();
  });
});
