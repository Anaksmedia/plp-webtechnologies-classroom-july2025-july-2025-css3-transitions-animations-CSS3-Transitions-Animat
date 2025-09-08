// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Function to calculate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // demonstrates return value
}

// Function to change the background color of an element
function changeBackground(element, color) {
  element.style.backgroundColor = color; // uses parameter
}

// Function demonstrating local vs global scope
let globalCounter = 0;

function incrementCounter() {
  let localCounter = 0; // local to this function
  localCounter++;
  globalCounter++;
  console.log('Local:', localCounter, 'Global:', globalCounter);
}

// Part 3: Combining CSS Animations with JavaScript

const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  // Remove class if it already exists to allow re-trigger
  box.classList.remove('animate');
  void box.offsetWidth; // forces reflow
  box.classList.add('animate');

  // Change background color dynamically
  const newColor = getRandomColor();
  changeBackground(box, newColor);

  // Update counters
  incrementCounter();
});
