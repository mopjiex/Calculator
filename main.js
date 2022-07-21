let num = document.querySelectorAll('.num');
let calcInput = document.querySelector('.calculator__input');
let sum = '';


let Calc = (value, sym) => {
    let index = value.indexOf(sym);
    let n1 = value.slice(0, index);
    let n2 = value.slice(index + 1);
    if(sym == '/') return +n1 / +n2; 
    if(sym == '+') return +n1 + +n2;
    if(sym == '-') return +n1 - +n2;
    if(sym == '*') return +n1 * +n2;
    
}

console.log(Calc('5*5', '*'));

num.forEach((el) => {
    el.addEventListener('click', ()=> {
        console.log(el.textContent)
        calcInput.value += el.textContent;
        sum = calcInput.value;
    });
    console.log(sum)
})
