'use strict';

const num = document.querySelectorAll('.num');
const calculatorInput = document.querySelector('.calculator__input');

const calc = (stroka) => {
    return eval(stroka);
}

num.forEach(elem => {
    elem.addEventListener('click', ()=> {
        calculatorInput.value += elem.textContent;
        if(elem.textContent == '=') {
            calculatorInput.value = calculatorInput.value.slice(0, -1);
            calculatorInput.value = Math.floor(calc(calculatorInput.value));
        }
    })
})