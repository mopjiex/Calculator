let num = document.querySelectorAll('.num');
let calcInput = document.querySelector('.calculator__input');
let game = document.querySelector('.game');
let gameList = document.querySelector('.game__list');


let checkedItem = document.querySelectorAll('.checked__item');


list = ['1', '2', '3', '1', '2', '3'];

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

gameItems(list);
let count = 0;
let gameItem = document.querySelectorAll('.game__item');


checkedItem.forEach(item => {
    item.addEventListener('click', ()=> {
        
        if(list.find(elem => {
            return elem == item.textContent;
        })
        ) {
            console.log('Такое есть в массиве');
            for(let elem of gameItem) {
                if(item.textContent == elem.textContent) {
                    elem.classList.add('r')
                }
            }
            
        } else {
            console.log('Нету')
        }
        item.classList.add('cp');
        
        let check = Array.from(gameItem).every((elem) => {
            return elem.classList.contains('r');
        });

        count++;
        console.log(count);

        if(count >= 5) console.log('ПРоиграл')
        else if(count < 5 && check) {
            console.log('Выиграл')
        }
    })
})


