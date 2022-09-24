$(function(){
    $('.slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="arrow arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="arrow arrow-right">',
    });
})