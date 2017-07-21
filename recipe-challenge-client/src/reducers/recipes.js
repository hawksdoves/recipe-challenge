import { GET_RECIPES_SUCCESS } from '../constants/actionTypes';

export default function recipes(state = [], action) {
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            return action.recipes;
        default:
            return state;
    }
}
