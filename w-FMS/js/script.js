$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('#one').click(function (event) {
        $('.slider').slick('goTo', 0);
    });

    $('#two').click(function (event) {
        $('.slider').slick('goTo', 1);
    });
    $('#three').click(function (event) {
        $('.slider').slick('goTo', 2);
    });

    $('#four').click(function (event) {
        $('.slider').slick('goTo', 3);
    });
    $('#five').click(function (event) {
        $('.slider').slick('goTo', 4);
    });

    $('#six').click(function (event) {
        $('.slider').slick('goTo', 5);
    });
});


