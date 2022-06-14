$(function () {
  // Header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let ScrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("navToggle");

  checkScroll(ScrollPos, introH);

  $(window).on("scroll resize", function () {
    let introH = intro.innerHeight();
    ScrollPos = $(this).scrollTop();

    checkScroll(ScrollPos, introH);
  });

  function checkScroll(ScrollPos, introH) {
    if (ScrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    console.log(elementOffset);

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  // navToggle

  $("#navToggle").on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  // Rewiews

  let slider = $("#rewiewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
