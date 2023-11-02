const sizeElem = document.querySelector('#font-size-control');
const textElem =  document.querySelector('#text');



sizeElem.addEventListener('input', onSizeElemChange);


function onSizeElemChange(event) {
    const size = event.target.value;
    textElem.style.transform = `scale(${size})`;
}