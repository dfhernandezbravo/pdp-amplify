import { bffInstance } from '@data-source/bff-instance';
import observabilityRepository from '..';
import { CustomEvent } from '@entities/observability';
import MockAdapter from 'axios-mock-adapter';

jest.mock('@data-source/bff-instance');

describe('observabilityRepository', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call bffInstance.post with the correct URL and data when calling customEvents', () => {
    const apiMock = new MockAdapter(bffInstance);

    apiMock.onPost('/observability/custom-events').reply(200);
    const data: CustomEvent = {
      eventName: 'event-name',
      data: {
        key: 'value',
      },
    };

    observabilityRepository.customEvents(data);

    expect(bffInstance.post).toHaveBeenCalledWith(
      '/observability/custom-events',
      data,
    );
  });
});
