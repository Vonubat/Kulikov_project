import IMask from 'imask';

const name = document.getElementById('name');
const comment = document.getElementById('comment');
const phone = document.getElementById('phone-number');
const maskOptions = {
  mask: '+{375}(00)000-00-00',
};
const mask = IMask(phone, maskOptions);

const callbackBtns = document.querySelectorAll('.callback');
const modalTrigger = document.getElementById('trigger');
const submitModal = document.getElementById('submit-modal');
const exitModal = document.getElementById('exit-modal');

for (const btn of callbackBtns) {
  btn.addEventListener('click', openModal);
}

submitModal.addEventListener('click', sendEmail);

function openModal() {
  const event = new Event('click');
  modalTrigger.dispatchEvent(event);
  return;
}

function closeModal() {
  const event = new Event('click');
  exitModal.dispatchEvent(event);
  return;
}

function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'Vonubat@gmail.com',
    Password: '10B56AA271CDCD9D8A5C1A0E5801EB49C336',
    To: 'atu_k@mail.ru',
    From: 'Vonubat@gmail.com',
    Subject: 'Заказ с магазина',
    Body: `Имя покупателя: ${name.value}<br />
    Номер покупателя: ${mask.value}<br />
    Комментарий покупателя: ${comment.value}`,
  }).then((message) => alert(message));
  closeModal();
}
