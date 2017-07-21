import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { GET_RECIPES_SUCCESS, GET_RECIPES_REQUEST } from '../constants/actionTypes';

const recipes = ['Hello', 'from the', 'other side'];

const mockResponse = {
    data: { recipes }
};

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    };
});

import getRecipes from './getRecipes';

describe('getRecipes', () => {
    it('should return a function', () => {
        const expectedActions = [
            { type: GET_RECIPES_REQUEST },
            { type: GET_RECIPES_SUCCESS, recipes }   
        ];
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const store = mockStore({ recipes: [] });

        return store.dispatch(getRecipes())
            .then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})
