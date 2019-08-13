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
        .removeClass('header-menu__locale-lang  --active');
});

$('.carousel').carousel();