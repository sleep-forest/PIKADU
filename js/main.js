//кнопка меню
let menuToggle = document.querySelector('#menu-toggle');

//меню
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
    //отменяем стандартный клик
    event.preventDefault();
    menu.classList.toggle('visible');
})