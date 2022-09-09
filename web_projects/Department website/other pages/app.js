
//pages
let login_page = document.querySelector('.Login')
let signUp_page = document.querySelector('.Register')

if (localStorage.getItem('Username') == null) {
    signUp_page.style.display = 'block';
    login_page.style.display = 'none';
}
else {
    signUp_page.style.display = 'none';
    login_page.style.display = 'block';
}

//buttons
const login_btn = document.getElementById('login_btn')
const signUp_btn = document.getElementById('signup_btn')

login_btn.onclick = () => {
    signUp_page.style.display = 'none';
    login_page.style.display = 'block';
}
signUp_btn.onclick = () => {
    signUp_page.style.display = 'block';
    login_page.style.display = 'none';
}

let newUser = document.querySelector('#New_Username')
let newemail = document.querySelector('#email')
let newpass = document.querySelector('#New_Password')
let confipass = document.querySelector('#Conf_Password')
let signin = document.querySelector('#SignUp')
let login_form = document.querySelector('#login_form')

signin.onclick = () => {

    console.log(newpass.value, confipass.value)
    if (newpass.value === confipass.value) {
        login_form.setAttribute('action', '../index.html')
        newUser = newUser.value;
        newemail = newemail.value;
        newpass = newpass.value;

        localStorage.setItem('Username', newUser)
        localStorage.setItem('email', newemail)
        localStorage.setItem('Password', newpass)
    }
    else {
        alert('password does not match')
        return false;
    }
}

let login = document.querySelector('#login')
let login_user = document.querySelector('#Username')
let login_password = document.querySelector('#Password')


let verify_user = localStorage.getItem('Username')
let verify_password = localStorage.getItem('Password')

console.log(verify_password, verify_user)
login.onclick = () => {
    if (login_user.value == verify_user && login_password.value == verify_password) {

        alert('Account Opening Successful')
    }
    else {
        alert('User Does Not Found Please Create an account');
    }
}