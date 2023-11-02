let counterValue = 0;

const counterValueSpan = document.querySelector("#value");

const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMinus.addEventListener("click", (event) => {
  counterValue = counterValue - 1;
  counterValueSpan.textContent = counterValue;
});

buttonPlus.addEventListener("click", (event) => {
    counterValue = counterValue + 1;
    counterValueSpan.textContent = counterValue;
});