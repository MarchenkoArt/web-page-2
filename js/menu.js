$(document).ready(function() {
    $('.header__head').click(function() {
        $('.header__navigation').toggleClass('open-menu');
        $('.header__menu-burger').toggleClass('open-menu');
        $('body').toggleClass('open-menu');
    });
});