// Récupérer les éléments HTML
const heart = document.getElementById('heart-status');
const shield = document.getElementById('shield-status');
const food = document.getElementById('food-status');
const thirst = document.getElementById('thirst-status');

// Ajouter des écouteurs d'événements de souris à chaque élément
heart?.addEventListener('mousedown', dragStart);
shield?.addEventListener('mousedown', dragStart);
food?.addEventListener('mousedown', dragStart);
thirst?.addEventListener('mousedown', dragStart);

// Définir les variables de position
let heartPosition = { x: 0, y: 0 };
let shieldPosition = { x: 0, y: 0 };
let foodPosition = { x: 0, y: 0 };
let thirstPosition = { x: 0, y: 0 };

// Définir les variables de déplacement
let heartDrag = false;
let shieldDrag = false;
let foodDrag = false;
let thirstDrag = false;

// Définir les variables de position de la souris
let mouseX = 0;
let mouseY = 0;

// Définir les variables de position de l'élément
let elementX = 0;
let elementY = 0;

function dragStart(e) {
  // Définir la position de la souris
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Définir la position de l'élément
  elementX = this.offsetLeft;
  elementY = this.offsetTop;

  // Définir la variable de déplacement
  if (this.id === 'heart-status') {
    heartDrag = true;
  } else if (this.id === 'shield-status') {
    shieldDrag = true;
  } else if (this.id === 'food-status') {
    foodDrag = true;
  } else if (this.id === 'thirst-status') {
    thirstDrag = true;
  }
}

// Ajouter un écouteur d'événements de souris au document
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function drag(e) {
  // Définir la nouvelle position de la souris
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Définir la nouvelle position de l'élément
  if (heartDrag) {
    heartPosition.x = mouseX - elementX;
    heartPosition.y = mouseY - elementY;
  } else if (shieldDrag) {
    shieldPosition.x = mouseX - elementX;
    shieldPosition.y = mouseY - elementY;
  } else if (foodDrag) {
    foodPosition.x = mouseX - elementX;
    foodPosition.y = mouseY - elementY;
  } else if (thirstDrag) {
    thirstPosition.x = mouseX - elementX;
    thirstPosition.y = mouseY - elementY;
  }

  // Définir la nouvelle position de l'élément
  if (heartDrag) {
    if (heart)
      heart.style.transform = `translate(${heartPosition.x}px, ${heartPosition.y}px) rotate(45deg)`;
  } else if (shieldDrag) {
    if (shield)
      shield.style.transform = `translate(${shieldPosition.x}px, ${shieldPosition.y}px) rotate(45deg)`;
  } else if (foodDrag) {
    if (food)
      food.style.transform = `translate(${foodPosition.x}px, ${foodPosition.y}px) rotate(45deg)`;
  } else if (thirstDrag) {
    if (thirst)
      thirst.style.transform = `translate(${thirstPosition.x}px, ${thirstPosition.y}px) rotate(45deg)`;
  }
}

function dragEnd() {
  // Définir la variable de déplacement
  heartDrag = false;
  shieldDrag = false;
  foodDrag = false;
  thirstDrag = false;
}
