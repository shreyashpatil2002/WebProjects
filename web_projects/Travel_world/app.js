document.querySelector('#top').addEventListener('click', () => {
  window.scrollTo({

    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight / 1.8) {
    document.querySelector('#top').style.display = 'block';
  }
  else {
    document.querySelector('#top').style.display = 'none';
  }
};

let button = document.getElementById('menu-btn');
let ul = document.querySelector('ul');
let main_image = document.querySelector('.main-image');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let all = document.querySelector('.hero');
let check = 0

document.getElementById('menu-btn').addEventListener('click', () => {
  if(check == 0) {
    ul.style.display = 'flex';
    button.classList.add('open');
    main_image.style.filter = 'blur(5px)';
    main.style.filter = 'blur(5px)';
    footer.style.filter = 'blur(5px)';
    all.style.height = '100vh';
    all.style.overflowY = 'hidden';
    check = 1;
  }
  else if (check == 1) {
    ul.style.display = 'none';
    button.classList.remove('open');
    main_image.style.filter = 'blur(0px)';
    main.style.filter = 'blur(0px)';
    footer.style.filter = 'blur(0px)';
    all.style.height = 'auto';
    check = 0;
  }
});