$('.slide-equipo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay:true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }
  }
  ]
});


$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$(function () {
  'use strict'

  $('.nav-link__mobile').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
  })
})


// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    $('.nav-top__header').addClass('nav-top__header--detele');
    $('.hamburger-inner').addClass('js-hamburger');
    $("#iso").addClass('img-size').attr('src', 'assets/img/Logo_CM.png').removeClass('scroll-up');
    $('.nombre-logo').addClass('nombre-logo--black');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $('.nav-link').removeClass('fixed-color');
    $('.nav-top__header').removeClass('nav-top__header--detele');
    $('.hamburger-inner').removeClass('js-hamburger');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/logo-color.png').removeClass('scroll-up');
    $('.nombre-logo').removeClass('nombre-logo--black');

  }
});


$(".hamburger").on("click", function () {
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active")
    $('.navbar-fixed-js').addClass('fixed');
    $('.hamburger-inner').addClass('js-hamburger');
    $('.nav-link').addClass('fixed-color');
    $('body').css('overflow', 'hidden ');
  } else {
    $(this).removeClass("is-active")
    $('body').css('overflow', 'scroll');
    if ($(document).scrollTop() <= 70 && ($(window).width() >= 0)) {
      $('.navbar-fixed-js').removeClass('fixed');
      $('.hamburger-inner').removeClass('js-hamburger');
      $('.nav-link').removeClass('fixed-color');

    }
  }
});