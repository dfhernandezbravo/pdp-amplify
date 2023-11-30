import WindowsEvents from '@components/events';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const dispatchCartDataEvent = () => {
  customDispatchEvent({
    name: WindowsEvents.CART_ID,
    detail: {},
  });
};

export default dispatchCartDataEvent;
