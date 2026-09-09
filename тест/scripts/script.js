const auth = document.querySelector('.authoriz')
const authBlock = document.querySelector('.auth')
const authSubmit = document.querySelector('.submit')

const email = document.querySelector('.email__input')
const password = document.querySelector('.password__input')

let buttonSC = 'auth'

const users = [
    {
        email: "email@example.com",
        password: "qwerty"
    }
]

authBlock.classList.add('hidden')

function button() { 
if(click == 1) 
    if (buttonSC == 'auth') {
        if (zn == 0) {
            authBlock.classList.remove('hidden')
            zn = 1
        } else {
            authBlock.classList.add('hidden')
            zn = 0
        }
    } else if (buttonSC == 'exit') {
        auth.textContent = 'Log/Sing -in'
        buttonSC = 'auth'
    }
    click = 0
}

let click = 0
let zn = 0

auth.addEventListener('click', () => {
    click = 1
    button()
})


authSubmit.addEventListener('click', () => {
    check()
    button()
})

function check() {
    let a = 0
    users.forEach(element => {
        if (element.email == email.value) {a = 1} else {a = 0}

        if (a == 1 && element.password == password.value) {
            a = 2
            authBlock.classList.add('hidden')
            email.value = ''
            password.value = ''
            alert('Вы успешно авторизовались')
            auth.textContent = 'Выйти'
            buttonSC = 'exit'
            zn = 0
        }

        if (a <= 1) {
            alert('Неправильные почта или пароль')
            email.value = ''
            password.value = ''
        }
    });
}