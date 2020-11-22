
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
let trackShift = 0;
let itemWidth = 600;


prev.addEventListener('click', function () {
    track.style.cssText = 'transform: translateX(' + (trackShift + itemWidth) + 'px);';
    trackShift += itemWidth;
    console.log(trackShift + itemWidth);

});

next.addEventListener('click', function () {
    track.style.cssText = 'transform: translateX(' + (trackShift - itemWidth) + 'px);';
    trackShift -= itemWidth;
    console.log(trackShift - itemWidth);

});

//=