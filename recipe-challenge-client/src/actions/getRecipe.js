import { default as fetchRecipe } from '../services/getRecipe';
import { GET_RECIPE_SUCCESS } from '../constants/actionTypes';

function getRecipeSuccess(recipe) {
    return {
        type: GET_RECIPE_SUCCESS,
        recipe
    };
}
export default function getRecipe(recipeId) {
    return (dispatch, recipeId) => {
        return fetchRecipe(recipeId)
            .then(resp => dispatch(getRecipeSuccess(resp.data)));
    };
}
