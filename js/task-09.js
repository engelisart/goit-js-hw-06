function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorElem = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

colorElem.addEventListener('click', onColorElemClick);

function onColorElemClick(event) {
document.body.style.backgroundColor = getRandomHexColor();
colorSpan.textContent = getRandomHexColor();
console.log(colorSpan)
}