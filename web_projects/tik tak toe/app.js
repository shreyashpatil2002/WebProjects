let Player1 = document.querySelector('#player1')
let Player2 = document.querySelector('#player2')
let start = document.querySelector('#submit')
let hero = document.querySelector('.hero')
let container = document.querySelector('.container');
let p1;
let p2;

start.onclick = () => {
     p1 = Player1.value;
     p2 = Player2.value;
     
    if (p1 === '' || p2 === '') {
        alert('Enter the player Name')
    }
    else {
        hero.style.display = 'flex';
        container.style.display = 'none';
    }
    return false;
}

let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');
let btn3 = document.querySelector('#three');
let btn4 = document.querySelector('#four');
let btn5 = document.querySelector('#five');
let btn6 = document.querySelector('#six');
let btn7 = document.querySelector('#seven');
let btn8 = document.querySelector('#eight');
let btn9 = document.querySelector('#nine');
let heading = document.querySelector('.winner');
let content = document.querySelector('.content');
let check = 1;

a = btn1.value = 0; btn1.setAttribute = 'disabled'
b = btn2.value = 0;
c = btn3.value = 0;
d = btn4.value = 0;
e = btn5.value = 0;
f = btn6.value = 0;
g = btn7.value = 0;
h = btn8.value = 0;
i = btn9.value = 0;


btn1.onclick = () => {
    if (check == 1) {
        btn1.innerHTML = '<i class="fa-regular fa-circle"></i>';
        a = 10;
        check = 0;
    }
    else {
        btn1.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        a = 20;
        check = 1;
    }
    check_if();
}
btn2.onclick = () => {
    if (check == 1) {
        btn2.innerHTML = '<i class="fa-regular fa-circle"></i>';
        b = 10;
        check = 0;
    }
    else {
        btn2.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        b = 20;
        check = 1;
    }
    check_if();
}
btn3.onclick = () => {
    if (check == 1) {
        btn3.innerHTML = '<i class="fa-regular fa-circle"></i>';
        c = 10;
        check = 0;
    }
    else {
        btn3.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        c = 20;
        check = 1;
    }
    check_if();
}
btn4.onclick = () => {
    if (check == 1) {
        btn4.innerHTML = '<i class="fa-regular fa-circle"></i>';
        d = 10;
        check = 0;
    }
    else {
        btn4.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        d = 20;
        check = 1;
    }
    check_if();
}
btn5.onclick = () => {
    if (check == 1) {
        btn5.innerHTML = '<i class="fa-regular fa-circle"></i>';
        e = 10;
        check = 0;
    }
    else {
        btn5.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        e = 20;
        check = 1;
    }
    check_if();
}
btn6.onclick = () => {
    if (check == 1) {
        btn6.innerHTML = '<i class="fa-regular fa-circle"></i>';
        f = 10;
        check = 0;
    }
    else {
        btn6.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        f = 20;
        check = 1;
    }
    check_if();
}
btn7.onclick = () => {
    if (check == 1) {
        btn7.innerHTML = '<i class="fa-regular fa-circle"></i>';
        g = 10;
        check = 0;
    }
    else {
        btn7.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        g = 20;
        check = 1;
    }
    check_if();
}
btn8.onclick = () => {
    if (check == 1) {
        btn8.innerHTML = '<i class="fa-regular fa-circle"></i>';
        h = 10;
        check = 0;
    }
    else {
        btn8.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        h = 20;
        check = 1;
    }
    check_if();
}
btn9.onclick = () => {
    if (check == 1) {
        btn9.innerHTML = '<i class="fa-regular fa-circle"></i>';
        i = 10;
        check = 0;
    }
    else {
        btn9.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        i = 20;
        check = 1;
    }
    check_if();
}

function check_if() {
    if (a == 20 && b == 20 && c == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (d == 20 && e == 20 && f == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (g == 20 && h == 20 && i == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (a == 20 && d == 20 && g == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (b == 20 && e == 20 && h == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (c == 20 && f == 20 && i == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (a == 20 && e == 20 && i == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }
    else if (g == 20 && e == 20 && c == 20) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p2} is winner`;
    }



    if (a == 10 && b == 10 && c == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (d == 10 && e == 10 && f == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (g == 10 && h == 10 && i == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (a == 10 && d == 10 && g == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (b == 10 && e == 10 && h == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (c == 10 && f == 10 && i == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (a == 10 && e == 10 && i == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
    else if (g == 10 && e == 10 && c == 10) {
        content.style.display = 'none';
        heading.style.display = 'flex';
        heading.innerText = `${p1} is winner`;
    }
}