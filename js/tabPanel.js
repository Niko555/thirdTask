$(document).ready(function () {
    $('.tabs_menu li').click(function (e) {
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
    });
});