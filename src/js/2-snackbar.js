'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputUserValue = document.querySelector('.js-form');
inputUserValue.addEventListener('submit', handleFormSabmit);

function handleFormSabmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const getFormElements = formElement.elements;
    const selectedOptionForm = getFormElements.state.value;
    const inputValueForm = getFormElements.delay.value;

    const promise = new Promise((resolve, reject) => {
        if (selectedOptionForm === 'fulfilled') {
            resolve(inputValueForm);
        } else {
            reject(inputValueForm);
        }
    });
    promise
        .then(delay => {
            return setTimeout(() => {
                iziToast.success({
                    title: 'OK',
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: 'topCenter',
                }); formElement.reset();
            }, delay);
        })
        .catch(delay => {
            return setTimeout(() => {
                iziToast.error({
                    title: 'Error',
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: 'topCenter',
                }); formElement.reset();
            }, delay);
        });
}
