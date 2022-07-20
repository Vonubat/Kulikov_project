document.addEventListener('scroll', minimizeHeader);

const burgerMenu = document.getElementById('burger-menu');
const cancelBtn = document.getElementById('cancel-button');
const body = document.getElementById('body');
const mobileNavigation = document.getElementById('mobile-navigation');
const headerMenuContainer = document.getElementById('header-menu-container');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileContacts = document.querySelector('.mobile-contacts');
const mobileMessengers = document.querySelector('.mobile-messengers');

burgerMenu.addEventListener('click', actionBurger);
cancelBtn.addEventListener('click', actionBurger);

for (const children of mobileMenu.children) {
  children.addEventListener('click', actionBurger);
}
for (const children of mobileContacts.children) {
  children.addEventListener('click', actionBurger);
}
for (const children of mobileMessengers.children) {
  children.addEventListener('click', actionBurger);
}

export function actionBurger() {
  body.classList.toggle('active');
  mobileNavigation.classList.toggle('active');

  if (mobileNavigation.classList.contains('active')) {
    headerMenuContainer.style.display = 'none';
  } else {
    headerMenuContainer.style.display = 'flex';
  }
}

export function minimizeHeader() {
  const connectionContainer = document.getElementById('connection-container');

  if (window.screen.width <= 800) {
    return;
  } else if (
    window.pageYOffset >= 700 &&
    !connectionContainer.classList.contains('visually-hidden')
  ) {
    connectionContainer.classList.add('visually-hidden');
  } else if (
    window.pageYOffset < 700 &&
    connectionContainer.classList.contains('visually-hidden')
  ) {
    connectionContainer.classList.remove('visually-hidden');
  }
}
