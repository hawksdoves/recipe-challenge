import isFetchingRecipes from './isFetchingRecipes';
import { GET_RECIPES_REQUEST, GET_RECIPES_SUCCESS } from '../constants/actionTypes';

describe('isFetchingRecipes', () => {
    it('should return the original state if not valid action', () => {
        const action = { 
            type: 'GET_ON_DOWN'
        };

        expect(isFetchingRecipes(false, action)).toEqual(false);
    })

    it('should return true if action GET_RECIPES_REQUEST', () => {
        const action = { 
            type: GET_RECIPES_REQUEST
        };

        expect(isFetchingRecipes(false, action)).toEqual(true);
    })

    it('should return false if action GET_RECIPES_SUCCESS', () => {
        const action = { 
            type: GET_RECIPES_SUCCESS
        };

        expect(isFetchingRecipes(true, action)).toEqual(false);
    })

    it('should have a default state', () => {
        const action = {};

        expect(isFetchingRecipes(undefined, action)).toEqual(false);
    })
})
