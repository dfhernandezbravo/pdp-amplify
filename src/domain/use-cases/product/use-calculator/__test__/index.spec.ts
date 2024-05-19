import { calculateFloorQuantity, calculatePaintQuantity } from '..';

describe('calculatePaintQuantity', () => {
  it('should calculate the paint quantity correctly', () => {
    const liters = '5';
    const formValues = {
      coverage: 20,
      extraChecked: true,
      hands: 2,
    };

    const result = calculatePaintQuantity(liters, formValues);

    expect(result.unitResult).toBe(1);
    expect(result.gallonResult).toBe(1.2);
  });

  it('should handle undefined coverage', () => {
    const liters = '5';
    const formValues = {
      coverage: undefined,
      extraChecked: false,
      hands: 1,
    };

    const result = calculatePaintQuantity(liters, formValues);

    expect(result.unitResult).toBe(1);
    expect(result.gallonResult).toBe(0);
  });
});

describe('calculateFloorQuantity', () => {
  it('should calculate the floor quantity correctly', () => {
    const coverage = '10';
    const formValues = {
      coverage: 20,
      extraChecked: true,
    };

    const result = calculateFloorQuantity(coverage, formValues);

    expect(result.unitResult).toBe(3);
  });

  it('should handle invalid coverage', () => {
    const coverage = 'invalid';
    const formValues = {
      coverage: 20,
      extraChecked: false,
    };

    const result = calculateFloorQuantity(coverage, formValues);

    expect(result.unitResult).toBe(1);
  });
});
describe('calculateFloorQuantity', () => {
  it('should calculate the floor quantity correctly', () => {
    const coverage = '10';
    const formValues = {
      coverage: 20,
      extraChecked: true,
    };
    const result = calculateFloorQuantity(coverage, formValues);

    expect(result.unitResult).toBe(3);
  });

  it('should handle invalid coverage', () => {
    const coverage = 'invalid';
    const formValues = {
      coverage: 20,
      extraChecked: false,
    };

    const result = calculateFloorQuantity(coverage, formValues);

    expect(result.unitResult).toBe(1);
  });
});
