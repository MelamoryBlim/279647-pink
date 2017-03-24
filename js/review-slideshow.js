jQuery(document).ready(function ($) {

  var slideCount = $('.reviews__item').length;
  var slideWidth = $('.reviews__item').width();
  var slideHeight = $('.reviews__item').height();
  var sliderUlWidth = slideCount * slideWidth;

    function moveLeft() {
        $('.reviews__items').animate({
            left: + slideWidth
        }, 680, function () {
            $('.reviews__items .reviews__item:last-child').prependTo('.reviews__items');
            $('.reviews__items').css('left', '');
        });
    };

    function moveRight() {
        $('.reviews__items').animate({
            left: - slideWidth
        }, 680, function () {
            $('.reviews__items .reviews__item:first-child').appendTo('.reviews__items');
            $('.reviews__items').css('left', '');
        });
    };

    $('.reviews__prev-btn').click(function () {
        moveLeft();
    });

    $('.reviews__next-btn').click(function () {
        moveRight();
    });

});
