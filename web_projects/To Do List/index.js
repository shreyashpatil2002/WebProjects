let User = document.querySelector('#Username')
let email = document.querySelector('#email')
let Password = document.querySelector('#Password')
let Confi_pass = document.querySelector('#Conf_Password')
let signin = document.querySelector('#SignUp')
let form = document.querySelector('.center');
let registration_form = document.querySelector('form');


signin.addEventListener('click', () => {

    if (User.value != '' && email.value != '' && Password.value === Confi_pass.value) {
        let a = User.value;
        let b = email.value;
        let c = Password.value;
        localStorage.setItem('Username', a);
        localStorage.setItem('Email', b);
        localStorage.setItem('Password', c);
        registration_form.setAttribute('action', 'main.html')
        confirm('Account Created Successfully');
    }
    else {
        registration_form.removeAttribute('action')
        alert('Password Does Not Match')
        form.classList.add('wrong')
        return false;
    }
});