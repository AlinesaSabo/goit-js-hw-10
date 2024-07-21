import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import pathSprite from '../img/sprite.svg';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      console.log(value);
      iziToast.success({
        title: 'OK',
        titleColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        message: value,
        messageColor: '#FFFFFF',
        position: 'topRight',
        iconUrl: `${pathSprite}#icon-success`,
        iconColor: '#FFFFFF',
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        titleColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        message: error,
        messageColor: '#FFFFFF',
        position: 'topRight',
        iconUrl: `${pathSprite}#icon-error`,
        iconColor: '#FFFFFF',
      });
    });
});
