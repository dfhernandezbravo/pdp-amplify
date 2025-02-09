import { CustomEvent } from '@entities/observability';
import customEvents from '..';
import observabilityRepository from '@services/observability';

jest.mock('@services/observability');

describe('customEvents', () => {
  it('should call observabilityRepository.customEvents with the provided event', async () => {
    const event: CustomEvent = { eventName: 'event-name', data: {} };

    await customEvents(event);

    expect(observabilityRepository.customEvents).toHaveBeenCalledWith(event);
  });

  it('should return null if observabilityRepository.customEvents throws an error', async () => {
    const event: CustomEvent = { eventName: 'event-name', data: {} };
    const error = new Error('Some error message');

    (observabilityRepository.customEvents as jest.Mock).mockImplementationOnce(
      () => {
        throw error;
      },
    );

    const result = await customEvents(event);

    expect(result).toBeNull();
  });
});
