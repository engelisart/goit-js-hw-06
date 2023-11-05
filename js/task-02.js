const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
let boxIngredients = [];


ingredients.forEach(ing => {
  const item = document.createElement('li');
  item.textContent = ing;
  item.classList.add('item');
  boxIngredients.push(item);
});

listIngredients.append(...boxIngredients);