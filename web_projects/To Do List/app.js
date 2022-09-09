if(localStorage.getItem('Username') == null) {
    let body = document.querySelector('body');
    body.innerHTML = ' ';
    body.innerHTML = '<h1 style="font-family: sans-serif; text-align:center">Click here <a href="index.html">Register</a></h1>'
}

let title = document.querySelector('title');

const user = localStorage.getItem('Username')

title.innerText = `${user.toUpperCase()}'s To-Do List`;

const logo = document.querySelector('.logo');

logo.innerHTML = `<h1>Welcome ${user}</h1>`

let signout = document.querySelector('#signOUt_btn');
let logout = document.querySelector('#logout');


signout.onclick = () => {
    let conform = confirm('You want to Logout')

    if (conform == true) {
        logout.setAttribute('href', 'index.html')
    }
}

let New_task = document.querySelector('#task')
let add_btn = document.querySelector('#submit')
let task_area = document.querySelector('.User_tasks')
let task_counter = 0;
let total;
let number;

if (localStorage.getItem('task1') != '') {
    number = localStorage.getItem('NO');
    let i = 1;
    while (i <= number) {
        let come = localStorage.getItem(`task${i}`);

        if (come !== null) {
            task_area.innerHTML += `<div id="task_${i}">
                <p id="do">
                    ${localStorage.getItem(`task${i}`)}
                </p>
                <div class="btn">
                <button id="done_btn" onclick="done(${i})">Done</button>
                <button id="remove_btn" onclick="remove(${i})">Remove</button>
                </div>
                </div>`;
        } i++;
    }
    task_counter = number;
}
add_btn.onclick = () => {
    if (New_task.value != '') {
        task_counter++;
        task_area.innerHTML += `<div id="task_${task_counter}">
        <p id="do">
            ${New_task.value}
        </p>
        <div class="btn">
            <button id="done_btn" onclick="done(${task_counter})">Done</button>
            <button id="remove_btn" onclick="remove(${task_counter})">Remove</button>
        </div>
        </div>`;
        let store = New_task.value;
        localStorage.setItem(`task${task_counter}`, store);
        total = task_counter;
        localStorage.setItem('NO', total)
        New_task.value = '';
        return false;
    }
    else {
        alert('Enter the Task');
    }
}

function done(a) {
    let div = document.querySelector(`#task_${a}`)
    div.style.background = 'lightgreen';
}

function remove(a) {
    localStorage.removeItem(`task${a}`);
    let div = document.querySelector(`#task_${a}`)
    div.style.display = 'none';
}