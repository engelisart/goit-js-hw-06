const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');


ingredients.forEach(ing => {
  const item = document.createElement('li');
  item.textContent = ing;
  listIngredients.appendChild(item);
});