const increase = document.querySelectorAll('.increase');
const decrease = document.querySelectorAll('.decrease');

const circles = document.querySelectorAll('.another-circle');

increase.forEach((up, index) => {
  up.addEventListener('click', () => {
    let test = parseInt(circles[index].getAttribute('data-stroke'));
    if (test > 0) {
      test = test - 5;
      circles[index].style.strokeDashoffset = test;
      circles[index].setAttribute('data-stroke', test);
    }
  });
});

decrease.forEach((down, index) => {
  down.addEventListener('click', () => {
    let test = parseInt(circles[index].getAttribute('data-stroke'));
    if (test < 125) {
      test = test + 5;
      circles[index].style.strokeDashoffset = test;
      circles[index].setAttribute('data-stroke', test);
    }
  });
});

/* ************************************ DRAG *************************************** */
// Sélectionne tous les éléments ayant la classe "draggable"
const draggableElements = document.querySelectorAll('.draggable');

// Ajoute un écouteur d'événement "mousedown" à chaque élément draggable

draggableElements.forEach((element) => {
  element.addEventListener('mousedown', startDrag);
});

function startDrag(event) {
  // event.preventDefault();
  // event.stopPropagation();
  // Empêche le clic droit de déclencher le drag and drop
  if (event.button !== 0) return;

  let element = event.target;
  while (!element.classList.contains('draggable')) {
    element = element.parentElement;
  }

  console.log(element);
  // Définit le style CSS "position: absolute" pour positionner l'élément librement
  element.style.position = 'absolute';

  // Stocke l'élément sélectionné
  let selectedElement = element;

  // Calcule les distances entre le clic de la souris et le bord de l'élément
  let offsetLeft = event.clientX - element.offsetLeft;
  let offsetTop = event.clientY - element.offsetTop;

  // Ajoute un écouteur d'événement "mousemove" à la fenêtre pour suivre les mouvements de la souris
  window.addEventListener('mousemove', dragElement);

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
    selectedElement.style.left = newLeft + 'px';
    selectedElement.style.top = newTop + 'px';
  }

  // Ajoute un écouteur d'événement "mouseup" à la fenêtre pour détecter quand l'utilisateur relâche le clic de la souris
  window.addEventListener('mouseup', () => {
    // Supprime l'écouteur d'événement "mousemove" de la fenêtre pour arrêter le déplacement
    window.removeEventListener('mousemove', dragElement);
  });
}
