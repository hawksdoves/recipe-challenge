import { combineReducers } from 'redux';

import recipes from './recipes';
import isFetchingRecipes from './isFetchingRecipes';
import favourites from './favourites'

export default combineReducers({
    recipes,
    favourites,
    isFetchingRecipes
})
