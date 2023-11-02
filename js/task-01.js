const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);
console.log(`\n`);

categories.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const categoriesTitleItem = item.querySelectorAll('li').length;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesTitleItem}`);
    console.log(`\n`);
});