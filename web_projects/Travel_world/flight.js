let button = document.getElementById('menu-btn');
let ul = document.querySelector('ul');
let all = document.querySelector('.hero');
let check = 0

document.getElementById('menu-btn').addEventListener('click', () => {
  if(check == 0) {
    ul.style.display = 'flex';
    button.classList.add('open');
    all.style.height = '100vh';
    all.style.overflowY = 'hidden';
    check = 1;
  }
  else if (check == 1) {
    ul.style.display = 'none';
    button.classList.remove('open');
    all.style.height = 'auto';
    check = 0;
  }
});