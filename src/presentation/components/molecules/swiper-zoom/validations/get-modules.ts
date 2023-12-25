import {
  Autoplay,
  Grid,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { SwiperZoomProps } from '../props';
import { SwiperModule } from 'swiper/types/shared';

function getModules({
  hasPagination,
  autoPlay,
}: Pick<SwiperZoomProps, 'hasPagination' | 'autoPlay' | 'isGrid'>) {
  const modules: SwiperModule[] = [Keyboard, Scrollbar, Navigation, Grid];

  if (hasPagination) modules.push(Pagination);
  if (autoPlay) modules.push(Autoplay);

  return modules;
}

export default getModules;
