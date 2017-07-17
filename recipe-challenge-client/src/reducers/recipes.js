const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export default function recipes(state = { recipes: [] }, action) {
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            return action.recipes
        default:
            return state;
    }
}