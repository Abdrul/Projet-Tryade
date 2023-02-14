const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");

const circles = document.querySelectorAll(".another-circle");

increase.forEach((up, index) => {
  up.addEventListener("click", () => {
    let test = parseInt(circles[index].getAttribute("data-stroke"));
    if (test > 0) {
      test = test - 5;
      circles[index].style.strokeDashoffset = test;
      circles[index].setAttribute("data-stroke", test);
    }
  });
});

decrease.forEach((down, index) => {
  down.addEventListener("click", () => {
    let test = parseInt(circles[index].getAttribute("data-stroke"));
    if (test < 125) {
      test = test + 5;
      circles[index].style.strokeDashoffset = test;
      circles[index].setAttribute("data-stroke", test);
    }
  });
});
