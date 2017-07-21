import { default as getAllRecipes } from '../services/getRecipes';
import { GET_RECIPES_SUCCESS, GET_RECIPES_REQUEST } from '../constants/actionTypes';

function getRecipesSuccess(recipes) {
    return {
        type: GET_RECIPES_SUCCESS,
        recipes
    };
}

function getRecipesRequest() {
    return {
        type: GET_RECIPES_REQUEST,
    };
}
export default function getRecipes() {
    return (dispatch) => {
        
        dispatch(getRecipesRequest());

        return getAllRecipes()
            .then(resp => dispatch(getRecipesSuccess(resp.data.recipes)));
    };
}
