$(document).ready(function () {
  $(".js-tilt").tilt({
    maxTilt: 20,
    perspective: 1200,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1,
    speed: 2000,
    transition: true,
    reset: true,
  });
});

var flagScroll = false;
$("body").addClass("fullHeight");

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});
$(".back-to-top").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
// Load intro
var tlLoadIntro = new TimelineMax({
  delay: 0.3,
  onComplete: function () {
    $("body").removeClass("fullHeight");
    flagScroll = true;
    $("div.load").css("display", "none");
  },
});
function loadIntro() {
  $(".control").addClass("hidden");
  var loadIntro = $(".load"),
    text1LoadIntro = $(".load .load__text1"),
    text2LoadIntro = $(".load .load__text2");
  tlLoadIntro
    .to(text1LoadIntro, 0.4, {
      autoAlpha: 1,
    })
    .to(text1LoadIntro, 0.4, {
      autoAlpha: 0,
      delay: 0.5,
    })
    .to(text2LoadIntro, 0.4, {
      autoAlpha: 1,
    })
    .to(text2LoadIntro, 0.4, {
      autoAlpha: 0,
      delay: 0.5,
    })
    .to(
      loadIntro,
      1.2,
      {
        y: "-105%",
        ease: Power4.easeInOut,
      },
      "-=0.4"
    );
  $(".control").removeClass("hidden");
}
loadIntro();
