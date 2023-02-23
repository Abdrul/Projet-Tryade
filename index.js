const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");

const circles = document.querySelectorAll(".another-circle");
const secondCircles = document.querySelectorAll("#circle-id");

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

const input = document.getElementById("input");

const changeColorAth = () => {
  const color = input.value;
  circles.forEach((circle) => {
    circle.style.stroke = color;
  });
};

input.addEventListener("input", changeColorAth);

// const div = document.querySelector(".parameters");

// document.addEventListener("keydown", (event) => {
//   if (event.key === "r") {
//     div.style.display = div.style.display === "none" ? "flex" : "none";
//     // div.classList.toggle("active");
//   }
// });
