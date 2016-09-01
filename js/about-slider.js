$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    nav: true,
    navText : ["",""],
    dots: false,
    margin: 12,
    responsive:{
      0:{
        items:1,
        nav:false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        loop: true

      },
      700:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
});