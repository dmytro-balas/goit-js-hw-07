function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
createButton.addEventListener('click', function () {
  const amount = input.valueAsNumber;
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  boxesContainer.innerHTML = '';
  createBoxes(amount);
  input.value = '';
});
destroyButton.addEventListener('click', function() {
  
  boxesContainer.innerHTML = '';
});
function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment(); 
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}