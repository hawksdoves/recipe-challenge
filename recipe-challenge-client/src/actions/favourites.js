import { REMOVE_FAVOURITE, ADD_FAVOURITE, GET_FAVOURITES } from '../constants/actionTypes';

export function addFavourite(recipeId) {

    return {
        type: ADD_FAVOURITE,
        recipeId
    };
}

export function removeFavourite(recipeId) {

    return {
        type: REMOVE_FAVOURITE,
        recipeId
    };
}


// Would use the below when we have user login and favourites would be stored
export function getFavourites(recipeId) {

    return {
        type: GET_FAVOURITES,
        recipeId
    };
}
