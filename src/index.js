import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
import Swiper from 'swiper/bundle';

new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
