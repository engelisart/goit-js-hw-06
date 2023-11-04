const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const boxIngredients = document.createDocumentFragment();


ingredients.forEach(ing => {
  const item = document.createElement('li');
  item.textContent = ing;
  boxIngredients.appendChild(item);
});

listIngredients.appendChild(boxIngredients);