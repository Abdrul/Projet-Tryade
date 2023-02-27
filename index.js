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
  const containerGearbox = document.querySelector(".container-info-lever-gear p");

  //Engine type
  const changeEngineTypeButton = document.getElementById("changeEngineType");
  //Div SVG engine type
  const containerGazolineEngine = document.querySelector(".gazolineEngine");
  const containerEletricEngine = document.querySelector(".eletricEngine");

  //Change speed unit
  const changeSpeedUnitButton = document.getElementById("changeSpeedUnit") ;




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
              leftArrowAnimate.setAttribute("values", "#B7B4B5;#42CA68;#42CA68;#B7B4B5;");
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
              rightArrowAnimate.setAttribute("values", "#B7B4B5;#42CA68;#42CA68;#B7B4B5;");
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

              gazolineEngineSVG = document.getElementById("gazolineEngineSVG").children;
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

              gazolineEngineSVG = document.getElementById("gazolineEngineSVG").children;
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
  changeSpeedUnitButton.addEventListener("click", function(){
      let containerUnitSpeed = document.querySelector(".container-speed div");
      let valueUnitSpeed = containerUnitSpeed.innerHTML;
      if(valueUnitSpeed === "KM/H"){
          containerUnitSpeed.innerHTML = "MPH"
      }else{
          containerUnitSpeed.innerHTML = "KM/H"
      }
  });




  //End of Car ATH
});

