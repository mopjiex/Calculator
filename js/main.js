'use strict';

const num = document.querySelectorAll('.num');
const calculatorInput = document.querySelector('.calculator__input');
const result = document.querySelector('.result');
const optionItem = document.querySelectorAll('.option__item');
const hangman = document.querySelector('.hangman');

const calc = (stroka) => {
    return eval(stroka);
}


const print = (arr) => {
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.classList.add('result__item');
        result.append(li);
        const p = document.createElement('p');
        p.classList.add('result__item-num');
        p.textContent = +arr[i];
        li.append(p);
    }
}

let count = 0;

const temp = list => {
    print(list);
    const resultItemNum = document.querySelectorAll('.result__item-num');
    const resultItem = document.querySelectorAll('.result__item');
    optionItem.forEach(item => {
        item.addEventListener('click', () => {
            if(list.find(elem => {
                return elem == item.textContent;
            })) {
                console.log('Есть такой элемент');
                for(let elem of resultItemNum) {
                    if(item.textContent == elem.textContent) {
                        elem.classList.add('db');
                    } 
                }
            } else {
                console.log('Такого элоемента нет');
                count++;
            }
            item.classList.add('disable');

            const check = Array.from(resultItemNum).every(elem => {
                return elem.classList.contains('db');
            });

            if(count >= 5) console.log('ПРоиграл')
            else if(count < 5 && check) {
                console.log('Выиграл')
                hangman.style.display = 'none';
                for(let item of optionItem) {
                    item.classList.remove('disable');
                }
                result.innerHTML = '';
            }
        });
    });
}

num.forEach(elem => {
    elem.addEventListener('click', ()=> {
        calculatorInput.value += elem.textContent;
        if(elem.textContent == '=') {
            calculatorInput.value = calculatorInput.value.slice(0, -1);
            calculatorInput.value = Math.floor(calc(calculatorInput.value));
            hangman.classList.add('db');
            temp(calculatorInput.value.split(''))
        }
    })
})

