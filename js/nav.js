let burger = document.querySelector(".burger");
const topNav = document.querySelector("nav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const scrollers1 = document.querySelector(".link1");
const scrollers2 = document.querySelector(".link2");
const scrollers3 = document.querySelector(".link3");

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

// Scrollers NAV //

scrollers1.addEventListener("click", () => {
  topNav.classList.remove("open");
  topNav.classList.remove("hidden");
  line1.classList.remove("hidden");
  line3.classList.remove("hidden");
});

scrollers2.addEventListener("click", () => {
  topNav.classList.remove("open");
  topNav.classList.remove("hidden");
  line1.classList.remove("hidden");
  line3.classList.remove("hidden");
});
