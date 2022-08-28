'use strict';

const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');
const img5 = document.querySelector('.img-5');

const num = document.querySelectorAll('.num');
const calculatorInput = document.querySelector('.calculator__input');
const result = document.querySelector('.result');
const optionItem = document.querySelectorAll('.option__item');
const hangman = document.querySelector('.hangman');
const losing = document.querySelector('.losing');
const losingBtn = document.querySelector('.losing__btn');
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
                console.log('Такого элемента нет');
                count++;
            }
            item.classList.add('disable');

            if(count == 1) {
                img1.classList.add('db');
            } else if(count == 2) {
                img2.classList.add('db');
            } else if(count == 3) {
                img3.classList.add('db');
            } else if(count == 4) {
                img4.classList.add('db');
            } else if(count == 5) {
                img5.classList.add('db');
            }
            const check = Array.from(resultItemNum).every(elem => {
                return elem.classList.contains('db');
            });

            if(count >= 5) {
                losing.style.display = 'block';
                console.log('ПРоиграл')
                for(let elem of optionItem) {
                    elem.classList.add('disable');
                }
                
                losingBtn.addEventListener('click', () => {
                    location.reload();
                })
            }
            else if(count < 5 && check) {
                console.log('Выиграл')
                hangman.classList.remove('db');
                for(let item of optionItem) {
                    item.classList.remove('disable');
                }
                result.innerHTML = '';
                count = 0;
                img1.classList.remove('db');
                img2.classList.remove('db');
                img3.classList.remove('db');
                img4.classList.remove('db');
                img5.classList.remove('db');
                
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


