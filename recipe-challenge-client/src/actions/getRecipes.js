import getRecipes from '../services/getRecipes';

function getRecipesSuccess(recipes) {
    return {
        type: 'GET_RECIPES_SUCCESS',
        recipes
    }
}
export default function getAllRecipes() {
    return (dispatch) => {
        getRecipes()
        .then(resp => dispatch(getRecipesSuccess(resp.data.recipes)))
    }
}
