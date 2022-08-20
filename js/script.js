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
    });
    $('ul.catalog__tabs').on('click', 'li:not(.tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
    });
  });

      
 