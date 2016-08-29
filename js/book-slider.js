$(document).ready(function () {
  $('.book-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        arrows:false
      }
    }]
  });
});