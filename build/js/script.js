
// hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
        menuItem = document.querySelectorAll('.promo__item'),
        hamburger = document.querySelector('.hamburger');
    console.log(hamburger);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo___menu_active');
        })
    })
})

//= hamburger

// slider 

let track = document.querySelector('.slider__track');
let prev = document.querySelector('.slider__button_prev');
let next = document.querySelector('.slider__button_next');
console.log(track.style.left);

prev.addEventListener('click', function () {
    track.style.left = '0%';
    console.log(track.style.left);
});

next.addEventListener('click', function () {
    track.style.left = '-209%';
    console.log(track.style.left);

});

//=