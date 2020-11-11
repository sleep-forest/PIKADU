//кнопка меню
let menuToggle = document.querySelector('#menu-toggle');

//меню
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
    //отменяем стандартный клик
    event.preventDefault();
    menu.classList.toggle('visible');
})

//---------------------------------------NEW------------------------------------------------------------

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');


const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');


const listUsers = [
    {
        id: '01',
        email: 'kate@mail.com',
        password: '12345',
        displayName: 'KateJS',

    },

    {
        id: '02',
        email: 'maks@mail.com',
        password: '123456',
        displayName: 'MaksHelloJS',

    }
];


const setUsers = {
    user: null,
    logIn(email, password, handler) {
        const user = this.getUser(email);//если получили юзера
        if (user.password === password) {
            this.authorizedUser(user);
            handler();
        } else {
            alert('Пользователь с такими данными не найден!')
        }

    },
    logOut() {
        console.log('login')
    },

    signUp(email, password, handler) {
        if (!this.getUser(email)) {
            const user = { email, password, displayName: email };
            listUsers.push(user)
            this.authorizedUser(user);
            handler();
        } else {
            alert('пользователь с таким email уже существует!')
        }
    },

    getUser(email) {//ищем одинаковые записи
        return listUsers.find((item) => {
            return item.email === email// === - Это строгое равенство
        })
    },

    authorizedUser(user) {
        this.user = user;
    }
};

const toggleAuthDom = () => {//?????????
    const user = setUsers.user;
    if (user) {
        loginElem.style.display = 'none';
        userElem.style.display = '';
        userNameElem.textContent = user.displayName;
    } else {
        loginElem.style.display = '';
        userElem.style.display = 'none';
    }
};

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
    event.preventDefault();

    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);

});

toggleAuthDom();


