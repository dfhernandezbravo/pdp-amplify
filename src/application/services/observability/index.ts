import { bffInstance } from '@data-source/bbf-instance';
import { CustomEvent } from '@entities/observability';

interface ObservabilityRepository {
  customEvents: (event: CustomEvent) => void;
}

const observabilityRepository: ObservabilityRepository = {
  customEvents: (event: CustomEvent) => {
    bffInstance.post('/observability/custom-events', event);
  },
};

export default observabilityRepository;
