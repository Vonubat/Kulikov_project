import './styles/base/normalize.css';
import './styles/styles.scss';
import 'bootstrap';
import Swiper from 'swiper/bundle';

new Swiper('.slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
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
