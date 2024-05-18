import productService from '@services/product';
import { getProduct } from '..';

jest.mock('@services/product');

describe('getProduct', () => {
  it('should return product data with color palettes if color codes exist', async () => {
    const productId = 123;
    const mockProductData = {
      id: productId,
      name: 'Test Product',
      colorCodes: ['red', 'blue', 'green'],
    };
    const mockColorsFromCms = ['red', 'blue', 'green'];
    productService.getProduct = jest
      .fn()
      .mockResolvedValue({ data: mockProductData });
    productService.getColors = jest
      .fn()
      .mockResolvedValue({ data: { value: mockColorsFromCms } });

    const result = await getProduct(productId);

    expect(productService.getProduct).toHaveBeenCalledWith(productId);
    expect(productService.getColors).toHaveBeenCalled();
    expect(result).toEqual({
      ...mockProductData,
      colorPalettes: mockColorsFromCms,
    });
  });

  it('should return product data without color palettes if color codes do not exist', async () => {
    const productId = 123;
    const mockProductData = {
      id: productId,
      name: 'Test Product',
    };

    productService.getProduct = jest
      .fn()
      .mockResolvedValue({ data: mockProductData });

    const result = await getProduct(productId);

    expect(productService.getProduct).toHaveBeenCalledWith(productId);
    expect(result).toEqual(mockProductData);
  });

  it('should return null if productService.getProduct throws an error', async () => {
    const productId = 123;
    const mockError = new Error('Product not found');

    productService.getProduct = jest.fn().mockRejectedValue(mockError);

    const result = await getProduct(productId);

    expect(productService.getProduct).toHaveBeenCalledWith(productId);
    expect(result).toBeNull();
  });

  it('should return null if getColorsFromCms throws an error', async () => {
    const productId = 123;
    const mockProductData = {
      id: productId,
      name: 'Test Product',
      colorCodes: ['red', 'blue', 'green'],
    };
    const mockError = new Error('Failed to fetch colors from CMS');

    productService.getProduct = jest
      .fn()
      .mockResolvedValue({ data: mockProductData });
    productService.getColors = jest.fn().mockRejectedValue(mockError);

    const result = await getProduct(productId);

    expect(productService.getProduct).toHaveBeenCalledWith(productId);
    expect(productService.getColors).toHaveBeenCalled();
    expect(result).toEqual({ ...mockProductData, colorPalettes: null });
  });
});
