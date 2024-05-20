import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import useGetId from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('useGetId', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return initial values', () => {
    const { result } = renderHook(() => useGetId());

    expect(result.current.productRefId).toBeNull();
    expect(result.current.variantSkuId).toBeNull();
  });

  it('should set productRefId and variantSkuId when department and skuId are present in the query', () => {
    (useRouter as jest.Mock).mockReturnValueOnce({
      query: {
        department: ['electronics'],
        skuId: '12345',
      },
    });

    const { result } = renderHook(() => useGetId());

    expect(result.current.productRefId).toBe('electronics');
    expect(result.current.variantSkuId).toBe('12345');
  });

  it('should set only variantSkuId when department is not present in the query', () => {
    (useRouter as jest.Mock).mockReturnValueOnce({
      query: {
        skuId: '12345',
      },
    });

    const { result } = renderHook(() => useGetId());

    expect(result.current.productRefId).toBeNull();
    expect(result.current.variantSkuId).toBe('12345');
  });

  it('should set only productRefId when skuId is not present in the query', () => {
    (useRouter as jest.Mock).mockReturnValueOnce({
      query: {
        department: ['electronics'],
      },
    });

    const { result } = renderHook(() => useGetId());

    expect(result.current.productRefId).toBe('electronics');
    expect(result.current.variantSkuId).toBeNull();
  });
});
