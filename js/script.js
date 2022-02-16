//Sliders//
const slideRight = document.querySelectorAll(".slide-in");
const slideUp = document.querySelectorAll(".slide-up");
const unobserveElement = document.querySelector(".unobserve");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("appear", entry.isIntersecting);
    });
  },
  {
    threshold: 0,
  }
);

slideRight.forEach((slide) => {
  observer.observe(slide);
});

slideUp.forEach((slide) => {
  observer.observe(slide);
});
