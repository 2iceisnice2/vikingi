$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        },
        
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow:  '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png"></button>'
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.heroes__slider-img',
      });

});