
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
// S??lectionne tous les ??l??ments ayant la classe "draggableClick"
const draggableElements = document.querySelectorAll(".draggableClick");

// Ajoute un ??couteur d'??v??nement "mousedown" ?? chaque ??l??ment draggable

draggableElements.forEach((element) => {
  element.addEventListener("mousedown", startDrag);
});

function startDrag(event) {
  event.preventDefault();
  event.stopPropagation();
  // Emp??che le clic droit de d??clencher le drag and drop
  if (event.button !== 0) return;

  let element = event.target;
  while (!element.classList.contains("draggable")) {
    element = element.parentElement;
  }

  // Stocke l'??l??ment s??lectionn??
  let selectedElement = element;

  // Calcule les distances entre le clic de la souris et le bord de l'??l??ment
  let offsetLeft = event.clientX - element.offsetLeft;
  let offsetTop = event.clientY - element.offsetTop;

  // Ajoute un ??couteur d'??v??nement "mousemove" ?? la fen??tre pour suivre les mouvements de la souris
  window.addEventListener("mousemove", dragElement);

  // Fonction pour d??placer l'??l??ment en fonction des mouvements de la souris
  /**
   *
   * @param {MouseEvent} event
   */
  function dragElement(event) {
    // Calcule la nouvelle position de l'??l??ment en fonction de la distance parcourue par la souris
    let newLeft = event.clientX - offsetLeft;
    let newTop = event.clientY - offsetTop;

    // Si l'??l??ment sort de la fen??tre, on le bloque
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

    // D??place l'??l??ment en modifiant ses propri??t??s CSS "left" et "top"
    selectedElement.style.left = newLeft + "px";
    selectedElement.style.top = newTop + "px";
  }

  // Ajoute un ??couteur d'??v??nement "mouseup" ?? la fen??tre pour d??tecter quand l'utilisateur rel??che le clic de la souris
  window.addEventListener("mouseup", () => {
    // Supprime l'??couteur d'??v??nement "mousemove" de la fen??tre pour arr??ter le d??placement
    window.removeEventListener("mousemove", dragElement);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  //Car ATH
  //The car signals
  const leftArrowButton = document.getElementById("leftArrowButton");
  const rightArrowButton = document.getElementById("rightArrowButton");
  const warningButton = document.getElementById("warningSignal");
  const lightButton = document.getElementById("lightSignal");
  const engineButton = document.getElementById("engineSignal");
  const seatButton = document.getElementById("seatSignal");

  //car speedometer
  const speedUpButton = document.getElementById("speedUp");
  const speedDownButton = document.getElementById("speedDown");
  const containerSpeed = document.querySelector(".container-speed p");

  //Gazoline
  const gazolineUpButton = document.getElementById("gazolineUp");
  const gazolineDownButton = document.getElementById("gazolineDown");
  const containerGazoline = document.querySelector(".container-img-pourcent p");

  //Gearbox
  const gearboxUpButton = document.getElementById("gearboxUp");
  const gearboxDownButton = document.getElementById("gearboxDown");
  const containerGearbox = document.querySelector(
    ".container-info-lever-gear p"
  );

  //Engine type
  const changeEngineTypeButton = document.getElementById("changeEngineType");
  //Div SVG engine type
  const containerGazolineEngine = document.querySelector(".gazolineEngine");
  const containerEletricEngine = document.querySelector(".eletricEngine");

  //Change speed unit
  const changeSpeedUnitButton = document.getElementById("changeSpeedUnit");

  //General variables

  //Warning on/off ?
  var warningOnOff = false;
  //speed variable
  var speed = 0;
  //gazoline variable
  var lvlGazoline = 0;
  //Gearbox variable
  var lvlGearbox = 0;

  //The turn signals
  //The animate tags of the left-right directional arrows
  const rightArrowAnimate = document.getElementById("right-arrow-animate");
  const leftArrowAnimate = document.getElementById("left-arrow-animate");

  //
  function clignotte() {
    value = this.getAttribute("value");
    if (value === "left") {
      //shutdown the second turn signal
      rightArrowAnimate.setAttribute("values", "#B7B4B5");

      //Switch on/off
      var attr = leftArrowAnimate.getAttribute("values");
      if (attr === "#B7B4B5" || warningOnOff === true) {
        leftArrowAnimate.setAttribute(
          "values",
          "#B7B4B5;#42CA68;#42CA68;#B7B4B5;"
        );
        warningOnOff = false;
      } else {
        leftArrowAnimate.setAttribute("values", "#B7B4B5");
      }
    } else {
      //shutdown the second turn signal
      leftArrowAnimate.setAttribute("values", "#B7B4B5");

      //Switch on/off
      var attr = rightArrowAnimate.getAttribute("values");
      if (attr === "#B7B4B5" || warningOnOff === true) {
        rightArrowAnimate.setAttribute(
          "values",
          "#B7B4B5;#42CA68;#42CA68;#B7B4B5;"
        );
        warningOnOff = false;
      } else {
        rightArrowAnimate.setAttribute("values", "#B7B4B5");
      }
    }
  }

  leftArrowButton.addEventListener("click", clignotte);
  rightArrowButton.addEventListener("click", clignotte);

  //Warnings signal
  function warning() {
    var attrL = leftArrowAnimate.getAttribute("values");
    var attrR = rightArrowAnimate.getAttribute("values");
    if (attrL === "#B7B4B5" || attrR === "#B7B4B5") {
      leftArrowAnimate.setAttribute(
        "values",
        "#B7B4B5;#42CA68;#42CA68;#B7B4B5;"
      );
      rightArrowAnimate.setAttribute(
        "values",
        "#B7B4B5;#42CA68;#42CA68;#B7B4B5;"
      );
      warningOnOff = true;
    } else {
      leftArrowAnimate.setAttribute("values", "#B7B4B5");
      rightArrowAnimate.setAttribute("values", "#B7B4B5");
      warningOnOff = false;
    }
  }

  warningButton.addEventListener("click", warning);

  //The light, engine and seat signals
  function onOff() {
    value = this.getAttribute("value");
    value = value + "-signal";

    children = document.getElementById(value).children;

    if (children[0].getAttribute("fill") === "#B7B4B5") {
      for (i = 0; i < children.length; i++) {
        children[i].setAttribute("fill", "#42CA68");
      }
    } else {
      for (i = 0; i < children.length; i++) {
        children[i].setAttribute("fill", "#B7B4B5");
      }
    }
  }

  lightButton.addEventListener("click", onOff);
  engineButton.addEventListener("click", onOff);
  seatButton.addEventListener("click", onOff);

  //Car speed up or speed down
  containerSpeed.innerHTML = speed;
  speedUpButton.addEventListener("click", function () {
    speed++;
    containerSpeed.textContent = speed;
  });

  speedDownButton.addEventListener("click", function () {
    if (speed >= 1) {
      speed--;
      containerSpeed.textContent = speed;
    }
  });

  //The level of gasoline
  containerGazoline.innerHTML = lvlGazoline + "%";
  gazolineUpButton.addEventListener("click", function () {
    if (lvlGazoline < 100) {
      lvlGazoline++;
      containerGazoline.textContent = lvlGazoline + "%";

      //Condition voyant rouge
      if (lvlGazoline < 11) {
        gazolineEngineSVG =
          document.getElementById("gazolineEngineSVG").children;
        eletricEngineSVG = document.getElementById("eletricEngineSVG").children;

        for (i = 0; i < gazolineEngineSVG.length; i++) {
          gazolineEngineSVG[i].setAttribute("fill", "#FF0000");
          eletricEngineSVG[i].setAttribute("fill", "#FF0000");
        }
      } else {
        for (i = 0; i < gazolineEngineSVG.length; i++) {
          gazolineEngineSVG[i].setAttribute("fill", "#FFFFFF");
          eletricEngineSVG[i].setAttribute("fill", "#FFFFFF");
        }
      }
    }
  });

  gazolineDownButton.addEventListener("click", function () {
    if (lvlGazoline >= 1) {
      lvlGazoline--;
      containerGazoline.textContent = lvlGazoline + "%";

      //Condition voyant rouge
      if (lvlGazoline < 11) {
        gazolineEngineSVG =
          document.getElementById("gazolineEngineSVG").children;
        eletricEngineSVG = document.getElementById("eletricEngineSVG").children;

        for (i = 0; i < gazolineEngineSVG.length; i++) {
          gazolineEngineSVG[i].setAttribute("fill", "#FF0000");
          eletricEngineSVG[i].setAttribute("fill", "#FF0000");
        }
      } else {
        for (i = 0; i < gazolineEngineSVG.length; i++) {
          gazolineEngineSVG[i].setAttribute("fill", "#FFFFFF");
          eletricEngineSVG[i].setAttribute("fill", "#FFFFFF");
        }
      }
    }
  });

  //The gearbox
  containerGearbox.innerHTML = lvlGearbox;
  gearboxUpButton.addEventListener("click", function () {
    if (lvlGearbox < 6) {
      lvlGearbox++;
      containerGearbox.textContent = lvlGearbox;
    }
  });
  gearboxDownButton.addEventListener("click", function () {
    if (lvlGearbox >= 1) {
      lvlGearbox--;
      containerGearbox.textContent = lvlGearbox;
    }
  });

  //Change engine type
  changeEngineTypeButton.addEventListener("click", function () {
    containerEletricEngine.classList.toggle("displayNone");
    containerGazolineEngine.classList.toggle("displayNone");
  });

  //Change speed unit
  changeSpeedUnitButton.addEventListener("click", function () {
    let containerUnitSpeed = document.querySelector(".container-speed div");
    let valueUnitSpeed = containerUnitSpeed.innerHTML;
    if (valueUnitSpeed === "KM/H") {
      containerUnitSpeed.innerHTML = "MPH";
    } else {
      containerUnitSpeed.innerHTML = "KM/H";
    }
  });

  //End of Car ATH
});

