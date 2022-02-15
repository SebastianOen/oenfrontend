let burger = document.querySelector(".burger");
const topNav = document.querySelector("nav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

let openMenu = false;

burger.addEventListener("click", () => {
  line1.classList.toggle("hidden");

  line3.classList.toggle("hidden");
  topNav.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 880) {
    topNav.classList.remove("open");
    topNav.classList.remove("hidden");
    line1.classList.remove("hidden");
    line3.classList.remove("hidden");
  }
});
