// Partie Augmentation et Diminution barre de vie

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

// Partie des parametres

const parameterModal = document.querySelector(".parameters");
let test = getComputedStyle(parameterModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    test.display === "none"
      ? parameterModal.style.setProperty("display", "block")
      : parameterModal.style.setProperty("display", "none");
  }
});

const buttonCloseParameters = document.querySelector(".close-parameters");

buttonCloseParameters.addEventListener("click", () => {
  parameterModal.style.setProperty("display", "none");
});

// Partie modification des parametres

const toggleDisplayStatus = document.querySelectorAll(".input-change-display");
const barOfLife = document.querySelectorAll(".bar-of-life");

toggleDisplayStatus.forEach((toggle, index) => {
  toggle.addEventListener("change", () => {
    barOfLife[index].classList.toggle("close-status-parameters");
  });
});

const choiceColors = document.querySelectorAll(".choice-color");
const rootVariableColor = document.querySelector(":root");

choiceColors.forEach((choiceColor) => {
  choiceColor.addEventListener("click", (e) => {
    choiceColors.forEach((o) => o.classList.remove("selected"));
    choiceColor.classList.add("selected");

    const getBackgroundValue = getComputedStyle(e.target).backgroundColor;

    rootVariableColor.style.setProperty(
      "--backgroundBarLife",
      getBackgroundValue
    );
  });
});

const inputColor = document.getElementById("color");

const changeColorAth = () => {
  const color = inputColor.value;
  circles.forEach((circle) => {
    circle.style.stroke = color;
  });
};

inputColor.addEventListener("input", changeColorAth);

const buttonSubmit = document.querySelector(".submit-form");

/* ************************************ DRAG *************************************** */
// Sélectionne tous les éléments ayant la classe "draggableClick"
const draggableElements = document.querySelectorAll(".draggableClick");

// Ajoute un écouteur d'événement "mousedown" à chaque élément draggable

draggableElements.forEach((element) => {
  element.addEventListener("mousedown", startDrag);
});

function startDrag(event) {
  event.preventDefault();
  event.stopPropagation();
  // Empêche le clic droit de déclencher le drag and drop
  if (event.button !== 0) return;

  let element = event.target;
  while (!element.classList.contains("draggable")) {
    element = element.parentElement;
  }

  // Stocke l'élément sélectionné
  let selectedElement = element;

  // Calcule les distances entre le clic de la souris et le bord de l'élément
  let offsetLeft = event.clientX - element.offsetLeft;
  let offsetTop = event.clientY - element.offsetTop;

  // Ajoute un écouteur d'événement "mousemove" à la fenêtre pour suivre les mouvements de la souris
  window.addEventListener("mousemove", dragElement);

  // Fonction pour déplacer l'élément en fonction des mouvements de la souris
  /**
   *
   * @param {MouseEvent} event
   */
  function dragElement(event) {
    // Calcule la nouvelle position de l'élément en fonction de la distance parcourue par la souris
    let newLeft = event.clientX - offsetLeft;
    let newTop = event.clientY - offsetTop;

    // Si l'élément sort de la fenêtre, on le bloque
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (
      newLeft >
      window.innerWidth /* Storing the element that is being dragged. */ -
        selectedElement.offsetWidth
    ) {
      newLeft = window.innerWidth - selectedElement.offsetWidth;
    }
    if (newTop > window.innerHeight - selectedElement.offsetHeight) {
      newTop = window.innerHeight - selectedElement.offsetHeight;
    }

    // Déplace l'élément en modifiant ses propriétés CSS "left" et "top"
    selectedElement.style.left = newLeft + "px";
    selectedElement.style.top = newTop + "px";
  }

  // Ajoute un écouteur d'événement "mouseup" à la fenêtre pour détecter quand l'utilisateur relâche le clic de la souris
  window.addEventListener("mouseup", () => {
    // Supprime l'écouteur d'événement "mousemove" de la fenêtre pour arrêter le déplacement
    window.removeEventListener("mousemove", dragElement);
  });
}
