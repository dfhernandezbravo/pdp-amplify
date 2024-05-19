import { CustomEvent } from '@entities/observability';
import observabilityRepository from '@services/observability';

const customEvents = async (event: CustomEvent) => {
  try {
    observabilityRepository.customEvents(event);
  } catch (error) {
    return null;
  }
};

export default customEvents;
