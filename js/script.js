$(document).ready(function(){
    $('.carousel__slick').slick({
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg" alt=""></button>',
        dots: 'slick-dots',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    }
    );
  });