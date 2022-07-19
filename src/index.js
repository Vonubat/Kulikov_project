import './styles/styles.scss';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

new Swiper('.slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  modules: [Navigation, Pagination, Autoplay],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
