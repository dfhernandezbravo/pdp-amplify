import { renderHook } from '@testing-library/react';
import useBreakpoints from '../useBreakpoints';

describe('useBreakpoints', () => {
  it('should return the correct breakpoints for desktop screen', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 1025px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useBreakpoints());
    const breakpoints = result.current;

    expect(breakpoints.isXs).toBe(false);
    expect(breakpoints.isSm).toBe(false);
    expect(breakpoints.isMd).toBe(false);
    expect(breakpoints.isLg).toBe(true);
    expect(breakpoints.device).toBe('Desktop');
  });

  it('should return the correct breakpoints for tablet screen sm', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 641px) and (max-width: 768px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useBreakpoints());
    const breakpoints = result.current;

    expect(breakpoints.isXs).toBe(false);
    expect(breakpoints.isSm).toBe(true);
    expect(breakpoints.isMd).toBe(false);
    expect(breakpoints.isLg).toBe(false);
    expect(breakpoints.device).toBe('Tablet');
  });

  it('should return the correct breakpoints for tablet screen md', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 769px) and (max-width: 1024px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useBreakpoints());
    const breakpoints = result.current;

    expect(breakpoints.isXs).toBe(false);
    expect(breakpoints.isSm).toBe(false);
    expect(breakpoints.isMd).toBe(true);
    expect(breakpoints.isLg).toBe(false);
    expect(breakpoints.device).toBe('Tablet');
  });

  it('should return the correct breakpoints for phone screen', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 640px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useBreakpoints());
    const breakpoints = result.current;

    expect(breakpoints.isXs).toBe(true);
    expect(breakpoints.isSm).toBe(false);
    expect(breakpoints.isMd).toBe(false);
    expect(breakpoints.isLg).toBe(false);
    expect(breakpoints.device).toBe('Phone');
  });
});
