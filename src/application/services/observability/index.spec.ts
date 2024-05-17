import { bffInstance } from '@data-source/bbf-instance';
import observabilityRepository from '.';
import { CustomEvent } from '@entities/observability';
import MockAdapter from 'axios-mock-adapter';

jest.mock('@data-source/bbf-instance');

describe('observabilityRepository', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call bffInstance.post with the correct URL and data when calling customEvents', async () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onPost('/observability/custom-events').reply(200);
    const data: CustomEvent = {
      eventName: 'event-name',
      data: {
        key: 'value',
      },
    };

    await observabilityRepository.customEvents(data);

    expect(bffInstance.post).toHaveBeenCalledWith(
      '/observability/custom-events',
      data,
    );
  });
});
