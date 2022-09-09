var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 2) {
        counter = 1;
    }
}, 7000);

let login_link = document.querySelector('.enter-Btn');
let login_btn = document.querySelector('#singup_login_btn');

let user = localStorage.getItem('Username')

if (user != null) {
    login_btn.style.display = 'none'
    login_link.innerHTML = `<a href="account.html" style="color:inherit;text-decoration: none;"><h3 style="font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-weight:500">@${user}<h3></a>`
}
