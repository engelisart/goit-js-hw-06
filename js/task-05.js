const textBox = document.querySelector('#name-input');
console.log(textBox);
const titleSpan = document.querySelector('#name-output');
console.log(titleSpan);

textBox.addEventListener('change', (event) => {
    titleSpan.textContent = textBox.value
});