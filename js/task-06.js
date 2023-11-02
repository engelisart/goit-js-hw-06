const textBox = document.querySelector('#validation-input')

textBox.addEventListener('blur', onTextBoxBlur);
textBox.addEventListener('focus', onTextBoxFocus);

function onTextBoxBlur(event) {
    const text = event.target.value;
    const minLength = +event.target.dataset.length;

    if (text.length > minLength) {
        event.target.classList.add('valid');
    } else {
        event.target.classList.add('invalid');
    }
};
function onTextBoxFocus(event) {
        event.target.classList.remove('valid');
        event.target.classList.remove('invalid');
};
