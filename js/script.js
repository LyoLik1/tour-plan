import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
});
