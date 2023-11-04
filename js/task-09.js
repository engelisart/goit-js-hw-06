function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorElem = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

colorElem.addEventListener('click', onColorElemClick);

let currentColor = getRandomHexColor();

function onColorElemClick(event) {
document.body.style.backgroundColor = currentColor;
colorSpan.textContent = currentColor;
console.log(colorSpan)
currentColor = getRandomHexColor();
}
