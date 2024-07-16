import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      console.log(value);
      iziToast.success({
        title: 'Success',
        message: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
    });
});
