let num = document.querySelectorAll('.num');
let calcInput = document.querySelector('.calculator__input');
let game = document.querySelector('.game');
let gameItem = document.querySelectorAll('.game__item');

list = '12345';

let Calc = (value, sym) => {
    let index = value.indexOf(sym);
    let n1 = value.slice(0, index);
    let n2 = value.slice(index + 1);
    if(sym == '/') return +n1 / +n2; 
    if(sym == '+') return +n1 + +n2;
    if(sym == '-') return +n1 - +n2;
    if(sym == '*') return +n1 * +n2;
    
}

gameItem.forEach( item => {
    item.addEventListener('click', ()=> {
          
    })
})

num.forEach((el) => {
    el.addEventListener('click', ()=> {
        calcInput.value += el.textContent;

        if(el.textContent == '=') {
            //game.style.display = 'block';
            calcInput.value = calcInput.value.slice(0, -1);
            console.log(calcInput.value)
            if(String(calcInput.value).includes('+')) {
                console.log(Calc(String(calcInput.value), '+'));
                calcInput.value = Calc(String(calcInput.value), '+');
            }
            else if(String(calcInput.value).includes('-')) {
                console.log(Calc(String(calcInput.value), '-'));
                calcInput.value = Calc(String(calcInput.value), '-');
            }
            else if(String(calcInput.value).includes('*')) {
                console.log(Calc(String(calcInput.value), '*'));
                calcInput.value = Calc(String(calcInput.value), '*');
            }
            else if(String(calcInput.value).includes('/')) {
                console.log(Calc(String(calcInput.value), '/'));
                calcInput.value = Calc(String(calcInput.value), '/');
            }

        }
    });
})

