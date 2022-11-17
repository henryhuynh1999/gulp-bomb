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
