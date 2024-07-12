function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  const brightness = getColorBrightness(randomColor);
  if (brightness < 128) {
    colorSpan.style.color = 'white';
  } else {
    colorSpan.style.color = 'black';
  }
});
function getColorBrightness(hexColor) {
  const rgb = hexToRgb(hexColor);
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}