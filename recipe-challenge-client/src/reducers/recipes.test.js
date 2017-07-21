import recipes from './recipes';
import { GET_RECIPES_SUCCESS } from '../constants/actionTypes';

describe('recipes', () => {
    it('should return the original state if not valid action', () => {
        const action = { 
            type: 'GET_ON_UP'
        }
        expect(recipes([], action)).toEqual([])
    })

    it('should return a new state if valid action', () => {
        const action = { 
            type: GET_RECIPES_SUCCESS, 
            recipes: ['My recipe']
        }
        expect(recipes([], action)).toEqual(action.recipes)
    })

    it('should have a default state', () => {
        const action = { 
        }
        expect(recipes(undefined, action)).toEqual([])
    })
})