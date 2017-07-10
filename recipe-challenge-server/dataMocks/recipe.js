const recipe1 = require('./recipe1.json');
const recipe2 = require('./recipe2.json');
const recipe3 = require('./recipe3.json');

function getRecipe(id) {
    return [recipe1, recipe2, recipe3].filter(recipe => recipe.id ===id)[0]
}

module.exports = getRecipe;