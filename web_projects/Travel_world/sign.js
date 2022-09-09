let pass = document.querySelector('#password');
let confi = document.querySelector('#confirm');
let ero = document.querySelector('#alert');
let hero = document.querySelector('html')

function check() {
    if (pass.value != confi.value || pass.value == '') {
        ero.innerText = 'Password does not match';
        ero.style.color = 'red';     
    }
    else {
        ero.innerText = 'Password matched sucesfully';
        ero.style.color = 'green';
    }
}