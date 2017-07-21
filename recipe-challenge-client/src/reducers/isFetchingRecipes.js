import { GET_RECIPES_REQUEST, GET_RECIPES_SUCCESS } from '../constants/actionTypes';

export default function isFetchingRecipes(state = false, action) {
    switch (action.type) {
        case GET_RECIPES_REQUEST:
            return true;
        case GET_RECIPES_SUCCESS:
            return false;
        default:
            return state;
    }
}
