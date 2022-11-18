$(document).ready(function () {
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.7,
  });
});
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
