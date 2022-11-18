$(document).ready(function () {
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.7,
  });
  const control_dropdown = document.getElementById("control-dropdown");
  const dropwdown = document.querySelector(".dropdown");
  const backtotop = document.querySelector(".is-hidden");
  window.onscroll = function () {
    console.log("In onscroll");
    backtop();
  };
  function backtop() {
    if (window.scrollTo > 400) {
      backtotop.classList.remove("is-hidden");
    } else {
      backtotop.classList.add("is-hidden");
    }
  }
  // control_dropdown.addEventListener("click", () => {
  //   dropwdown.classList.toggle("active");
  // });
  function initScript() {
    // Add your scripts here
    // Example: initSlider();
  }
  initScript();
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
  // if ($(this).scrollTop() > 150) {
  //   $(".page-header").addClass("sticky top-0");
  // } else {
  //   $(".page-header").removeClass("sticky top-0");
  // }
});
$(".back-to-top").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
