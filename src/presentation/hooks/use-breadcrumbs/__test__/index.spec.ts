import { renderHook, waitFor } from '@testing-library/react';
import { useBreadcrumbs } from '..';

describe('useBreadcrumbs', () => {
  it('should split the URL and return an array of links', async () => {
    const url = 'path/to/some-page';
    const { result } = renderHook(() => useBreadcrumbs());
    const { splitUrl } = result.current;
    const mockLinks = await waitFor(() => splitUrl(url));

    expect(mockLinks).toEqual([
      { text: 'path', href: '/path' },
      { text: 'to', href: '/path/to' },
      { text: 'some page', href: '/path/to/some-page' },
    ]);
  });

  it('should handle URLs with query parameters', async () => {
    const url = 'path/to/some-page?param1=value1&param2=value2';
    const { result } = renderHook(() => useBreadcrumbs());
    const { splitUrl } = result.current;
    const mockLinks = await waitFor(() => splitUrl(url));

    expect(mockLinks).toEqual([
      { text: 'path', href: '/path' },
      { text: 'to', href: '/path/to' },
      { text: 'some page', href: '/path/to/some-page' },
    ]);
  });
});
