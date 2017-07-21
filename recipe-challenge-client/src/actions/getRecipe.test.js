import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { GET_RECIPE_SUCCESS  } from '../constants/actionTypes';

jest.mock('axios', () => {
    const recipe = { id: '1' };
    const mockGetRequest = jest.fn(() => Promise.resolve({ data: recipe }));

    return {
        get: mockGetRequest
    };
});

import getRecipe from './getRecipe';

describe('getRecipe', () => {
    it('should return a function and dispatch action', () => {
        const expectedActions = [
            { type: GET_RECIPE_SUCCESS, recipe: { id: '1' } }
        ];
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const store = mockStore({ recipe: {} });

        return store.dispatch(getRecipe()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})
