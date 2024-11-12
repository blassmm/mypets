$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  });
  $('.brands-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

gsap.from(".title-js", { duration: 4, x: -200, ease: "bounce.out" });
gsap.from("#sequential", { duration: 5, opacity: 0, y: -50 });
gsap.from(".first-grid-container", { duration: 4, x: -200, ease: "bounce.out" });


