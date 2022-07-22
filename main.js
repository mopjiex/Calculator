let num = document.querySelectorAll('.num');
let calcInput = document.querySelector('.calculator__input');
let game = document.querySelector('.game');
let gameList = document.querySelector('.game__list');
let gameItem = document.querySelectorAll('.game__item');

let checkedItem = document.querySelectorAll('.checked__item');


list = ['1', '2', '3'];

let Calc = (value, sym) => {
    let index = value.indexOf(sym);
    let n1 = value.slice(0, index);
    let n2 = value.slice(index + 1);
    if(sym == '/') return +n1 / +n2; 
    if(sym == '+') return +n1 + +n2;
    if(sym == '-') return +n1 - +n2;
    if(sym == '*') return +n1 * +n2;
    
}





let gameItems = item => {
    //item = String(item).split('');
    console.log(item)
    for(let i = 0; i < item.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = +item[i];
        li.classList.add('game__item');
        gameList.append(li);
    }
}

gameItems(list);

console.log(gameItem[0].value)
checkedItem.forEach(item => {
    item.addEventListener('click', ()=> {
        
        if(list.find(elem => {
            return elem == item.textContent;
        })
        ) {
            console.log('Такое есть в массиве');
            
        } else {
            console.log('Нету')
        }
        item.classList.add('cp');
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

