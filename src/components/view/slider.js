import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import load from './../controller/loader';

document.addEventListener('DOMContentLoaded', generateProjects);

async function generateProjects(event) {
  // console.log(event);
  console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
  const projects = (await load('./../../db/projects.json')).projects;
  console.log(projects);
  const currency = await load('https://www.nbrb.by/api/exrates/rates/431');

  const divProjects = document.getElementById('projects');

  const divSlider = document.createElement('div');
  divSlider.classList.add('swiper', 'slider');
  divProjects.append(divSlider);

  const divSwiperWrapper = document.createElement('div');
  divSwiperWrapper.classList.add('swiper-wrapper');
  const swiperButtonNext = document.createElement('div');
  swiperButtonNext.classList.add('swiper-button-next');
  const swiperButtonPrev = document.createElement('div');
  swiperButtonPrev.classList.add('swiper-button-prev');
  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');

  divSlider.append(
    divSwiperWrapper,
    swiperButtonNext,
    swiperButtonPrev,
    swiperPagination
  );

  for (let i = 0; i < projects.length; i++) {
    const card = document.createElement('div');
    card.classList.add('swiper-slide', 'card');
    divSwiperWrapper.append(card);

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `./assets/slider/${projects[i].img}`);
    cardImg.setAttribute('alt', `${projects[i].img} picture`);
    cardImg.classList.add('card-img');
    card.append(cardImg);

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    card.append(cardTitle);

    const cardName = document.createElement('div');
    cardName.classList.add('card-name');
    cardName.innerHTML = projects[i].name;

    const cardType = document.createElement('span');
    cardType.classList.add('card-type');
    cardType.innerHTML = projects[i].type;

    const cardSquare = document.createElement('span');
    cardSquare.classList.add('card-square');
    cardSquare.innerHTML = `${projects[i].square} м<sup>2</sup>`;

    const cardPrice = document.createElement('span');
    cardPrice.classList.add('card-price');
    cardPrice.innerHTML = `${Math.ceil(
      projects[i].price * currency.Cur_OfficialRate
    )} BYN/м<sup>2</sup>`;

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = `${projects[i].description}`;

    cardTitle.append(
      cardName,
      cardType,
      cardSquare,
      cardPrice,
      cardDescription
    );
  }

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
    breakpoints: {
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40,
      // },

      // when window width is >= 800px
      800: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      // when window width is >= 1300px
      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
