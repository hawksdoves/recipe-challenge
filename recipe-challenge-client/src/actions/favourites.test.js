import { addFavourite, removeFavourite } from './favourites';
import { REMOVE_FAVOURITE, ADD_FAVOURITE } from '../constants/actionTypes';

describe('favourites', () => {
    it('removeFavourite returns an object', () => {
        const expectedAction = {
            type: REMOVE_FAVOURITE,
            recipeId: '2'
        };
        expect(removeFavourite('2')).toEqual(expectedAction);
    })

    it('addFavourite returns an object', () => {
        const expectedAction = {
            type: ADD_FAVOURITE,
            recipeId: '2'
        };
        expect(addFavourite('2')).toEqual(expectedAction);
    })
})