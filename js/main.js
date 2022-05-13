$(function(){
    
    $('.capital__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.capital__slider-text',
        arrows: false,
        dots: true,
      });
      $('.capital__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.capital__slider-img',
        fade: true,
        arrows: false,
      });

});