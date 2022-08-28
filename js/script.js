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

  // Modal windows
  $('[data-modal=consultation]').on('click', function() {
    $('.overflow, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overflow, #order').fadeOut('slow');
  });
  $('.catalog-item__btn').each(function(i){
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
      $('.overflow, #order').fadeIn('slow');
    });
  });
  
    
  function validForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
        messages: {
          name: "Будь ласка введіть своє ім'я",
          phone: "Будь ласка введіть свій номер",
          email: {
          required: "Нам потрібна ваша пошта, щоб зв'язатись з вами",
          email: "Введіть правильну поштову адресу"
          }
        }
      
  });
  };
  validForms('#consultation form');
  validForms('#consult');
  validForms('#order form');

  $("input[name=phone]").mask("+38(999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "/mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut('slow')
      $('.overflow, #answer').fadeIn('slow')
      $('form').trigger('reset');
    });
    return false;

  });
});

      
 