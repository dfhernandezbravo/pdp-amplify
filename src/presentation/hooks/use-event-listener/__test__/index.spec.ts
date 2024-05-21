import { renderHook, fireEvent } from '@testing-library/react';
import useEventListener from '..';

describe('useEventListener', () => {
  test('should add event listener to the element', () => {
    const element = document;
    const event = 'click';
    const handler = jest.fn();

    renderHook(() => useEventListener(element, event, handler));

    fireEvent.click(element);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('should remove event listener when unmounted', () => {
    const element = document;
    const event = 'click';
    const handler = jest.fn();

    const { unmount } = renderHook(() =>
      useEventListener(element, event, handler),
    );

    unmount();

    fireEvent.click(element);

    expect(handler).not.toHaveBeenCalled();
  });
});
