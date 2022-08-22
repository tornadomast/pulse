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
    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__more');
  toggleSlide('.catalog-item__back');
  });

      
 