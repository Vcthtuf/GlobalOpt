// let menu = $("#menu");
// let hamburger = $('#hamburger');
// let heightHeader = parseInt($('#home').css('height')) + parseInt($('#home').css('padding-top')) + parseInt($('#home').css('padding-bottom'));
// console.log(heightHeader);

// $(window).scroll(function () {
//     var top = $(this).scrollTop();
//     if (top >= heightHeader) {
//         menu.addClass('header_nav_scroll');
//         hamburger.addClass('hamburger_scroll');
//     } else if (top <= heightHeader) {
//         menu.removeClass('header_nav_scroll');
//         hamburger.removeClass('hamburger_scroll');
//     }
// });

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