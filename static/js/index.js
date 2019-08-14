// Добавляю/Удаляю класс активности при нажатии на пункт меню
$('.header-menu__navigation-item').click(function() {
    $(this)
        .addClass('header-menu__navigation-item--active')
        .siblings()
        .removeClass('header-menu__navigation-item--active');
});

$('.header-menu__locale-lang').click(function() {
    $(this)
        .addClass('header-menu__locale-lang--active')
        .siblings()
        .removeClass('header-menu__locale-lang--active');
});
$('.footer-menu__navigation-item').click(function() {
    $(this)
        .addClass('footer-menu__navigation-item--active')
        .siblings()
        .removeClass('footer-menu__navigation-item--active');
});
$(document).ready(function () {
    $('.container-gallery__description-control-prev-icon').addClass('disabled');
});

$('#first-slider').on('slid.bs.carousel', function (event) {
    id = Array.prototype.indexOf.call(event.target.childNodes[1].children, event.target.querySelector('.active'));
    if (id === 0) {
        $('.container-gallery__description-control-prev-icon').addClass('disabled');
    } else if (id === 4) {
        $('.container-gallery__description-control-next-icon').addClass('disabled');
    } else {
        $('.container-gallery__description-control-prev-icon').removeClass('disabled');
        $('.container-gallery__description-control-next-icon').removeClass('disabled');
    }
});