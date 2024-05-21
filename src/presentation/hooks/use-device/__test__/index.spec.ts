import { renderHook } from '@testing-library/react';
import { useDevice } from '..';

describe('useDevice', () => {
  it('should return the correct device and OS for a small screen', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 767px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useDevice());

    expect(result.current.device).toBe('Phone');
    expect(result.current.os).toBe('Desktop');
  });

  it('should return the correct device and OS for a medium screen', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 768px) and (max-width: 1023px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useDevice());

    expect(result.current.device).toBe('Tablet');
    expect(result.current.os).toBe('Desktop');
  });

  it('should return the correct device and OS for a large screen', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 1024px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useDevice());

    expect(result.current.device).toBe('Desktop');
    expect(result.current.os).toBe('Desktop');
  });

  it('should return the correct OS for Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
      writable: true,
    });

    const { result } = renderHook(() => useDevice());

    expect(result.current.device).toBe('Desktop');
    expect(result.current.os).toBe('Android');
  });

  it('should return the correct OS for iOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
      writable: true,
    });

    const { result } = renderHook(() => useDevice());

    expect(result.current.device).toBe('Desktop');
    expect(result.current.os).toBe('iOS');
  });
});
