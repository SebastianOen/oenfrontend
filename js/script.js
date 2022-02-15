//Sliders//
const slideRight = document.querySelectorAll(".slide-in");
const slideUp = document.querySelectorAll(".slide-up");

const appearOptions = {};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

slideRight.forEach((slider) => {
  appearOnScroll.observe(slider);
});

slideUp.forEach((slideUps) => {
  appearOnScroll.observe(slideUps);
});
