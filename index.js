// Slider

$('.sk-top').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    responsive:{
      0:{
        items:3
      },
      600:{
        items:5,
        autoplayTimeout: 1500
      },
      700:{
        items:6,
        autoplayTimeout: 2000
      },
      1000:{
        items:7,
        autoplayTimeout: 3000
      }
    }
});
$('.sk-bottom').owlCarousel({
    loop:true,
    rtl: true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    responsive:{
      0:{
        items:3
      },
      600:{
        items:5,
        autoplayTimeout: 1500
      },
      700:{
        items:6,
        autoplayTimeout: 2000
      },
      1000:{
        items:7,
        autoplayTimeout: 3000
      }
    }
});

  // Nav

  const navToggle = document.querySelector('.menu-button');

  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
  });