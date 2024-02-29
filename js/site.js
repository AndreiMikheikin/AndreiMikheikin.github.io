window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

$(document).ready(function ($) {
    $('#top>header>#mobMenu>.close-btn').click(function () {
        $('#top>header>.mobile-menu').css('display', 'none');
    });
});

$(document).ready(function ($) {
    $('#top>header>.container>.mobile-column>.mobile-column-btn').click(function () {
        $('#top>header>.mobile-menu').css('display', 'block');
    });
});

$(document).ready(function ($) {
    let notDroped1 = document.querySelector('.not-droped1');
    let dropButton1 = document.querySelector('.dropdown-btn1');

    dropButton1.onclick = function () {
        notDroped1.classList.toggle('droped');
    };
});

$(document).ready(function ($) {
    let notDroped2 = document.querySelector('.not-droped2');
    let dropButton2 = document.querySelector('.dropdown-btn2');

    dropButton2.onclick = function () {
        notDroped2.classList.toggle('droped');
    };
});

$(document).ready(function ($) {
    let notDroped3 = document.querySelector('.not-droped3');
    let dropButton3 = document.querySelector('.dropdown-btn3');

    dropButton3.onclick = function () {
        notDroped3.classList.toggle('droped');
    };
});

$(document).ready(function ($) {
    let notDroped4 = document.querySelector('.not-droped4');
    let dropButton4 = document.querySelector('.dropdown-btn4');

    dropButton4.onclick = function () {
        notDroped4.classList.toggle('droped');
    };
});