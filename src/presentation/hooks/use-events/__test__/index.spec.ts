import { renderHook } from '@testing-library/react';
import { useEvents } from '..';

describe('useEvents', () => {
  describe('dispatchEvent', () => {
    it('should dispatch a custom event with the provided name and detail', () => {
      const eventName = 'testEvent';
      const eventDetail = { foo: 'bar' };
      const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent');
      const { result } = renderHook(() => useEvents());
      const { dispatchEvent } = result.current;

      dispatchEvent({ name: eventName, detail: eventDetail });

      expect(dispatchEventSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          type: eventName,
          detail: eventDetail,
        }),
      );
    });
  });
});
