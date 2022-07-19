document.addEventListener('scroll', minimizeHeader);

export function minimizeHeader(event) {
  const connectionContainer = document.getElementById('connection-container');
  if (
    window.pageYOffset >= 300 &&
    !connectionContainer.classList.contains('visually-hidden')
  ) {
    connectionContainer.classList.add('visually-hidden');
  } else if (
    window.pageYOffset < 300 &&
    connectionContainer.classList.contains('visually-hidden')
  ) {
    connectionContainer.classList.remove('visually-hidden');
  }
}

export default minimizeHeader;
