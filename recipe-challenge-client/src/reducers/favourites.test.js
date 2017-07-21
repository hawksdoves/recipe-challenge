import favourites from './favourites';
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/actionTypes';

describe('favourites', () => {
    it('should return the original state if not valid action', () => {
        const action = { 
            type: 'GET_ON_DOWN'
        };

        expect(favourites([], action)).toEqual([]);
    })

    it('should return the original state with an additional recipeID ', () => {
        const action = { 
            type: ADD_FAVOURITE, 
            recipeId: '1'
        };

        expect(favourites([], action)).toEqual(['1']);
    })

    it('should return the original state without that recipeID ', () => {
        const action = { 
            type: REMOVE_FAVOURITE, 
            recipeId: '1'
        };

        expect(favourites(['2','1'], action)).toEqual(['2']);
    })

    it('should have a default state', () => {
        const action = {};

        expect(favourites(undefined, action)).toEqual([]);
    })
})
