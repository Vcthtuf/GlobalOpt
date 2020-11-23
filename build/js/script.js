
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


    //= hamburger

    // slider 

    let track = document.querySelector('.slider__track');
    let prev = document.querySelector('.slider__button_prev');
    let next = document.querySelector('.slider__button_next');
    let trackShift = 0;
    let screenWidth = document.documentElement.clientWidth;
    let itemWidth = 600;

    prev.addEventListener('click', function () {
        checkScreen();
        track.style.cssText = 'transform: translateX(' + (trackShift + itemWidth) + 'px);';
        trackShift += itemWidth;

        checkButton();

    });

    next.addEventListener('click', function () {
        checkScreen();
        track.style.cssText = 'transform: translateX(' + (trackShift - itemWidth) + 'px);';
        trackShift -= itemWidth;

        checkButton();

    });

    function checkButton() {
        if (trackShift >= itemWidth) {
            prev.classList.add("button_passive");
        } else {
            prev.classList.remove("button_passive");
        }

        if (trackShift <= -itemWidth) {
            next.classList.add("button_passive");
        } else {
            next.classList.remove("button_passive");
        }


    }

    function checkScreen() {
        if (screenWidth <= 600 && screenWidth > 500) {
            itemWidth = 500;
        } else if (screenWidth <= 500 && screenWidth > 400) {
            itemWidth = 400;
        } else if (screenWidth <= 400 && screenWidth > 300) {
            itemWidth = 300;
        }
        console.log(screenWidth);
        console.log(itemWidth);
    }

    //= slider

})