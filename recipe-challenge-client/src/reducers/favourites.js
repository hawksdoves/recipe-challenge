import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/actionTypes';

export default function favourites(state = [], action) {
    switch (action.type) {
        case ADD_FAVOURITE:
            return [...state, action.recipeId];
        case REMOVE_FAVOURITE:
            const newState = deleteFavourite(state, action.recipeId);
            return [...newState];
        default:
            return state;
    }
}

function deleteFavourite(favourites, recipeId) {
    const newState = favourites.filter((favourite) => favourite !== recipeId);
    return newState;
}
