import WindowsEvents from '@components/events';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const dispatchCartDataEvent = () => {
  customDispatchEvent({
    name: WindowsEvents.GET_CART_ID,
    detail: null,
  });
};

export default dispatchCartDataEvent;
