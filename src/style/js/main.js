$(document).ready(() => {
    $('.burger-menu').on('click', function() {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');
        } else {
            $('.menu').addClass('active');
        }
    })
})