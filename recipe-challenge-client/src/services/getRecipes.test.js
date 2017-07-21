const mockResponse = {
    recipes: ['Hello', 'from the', 'other side']
};

const API_URL = 'http://localhost:3001/api';

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    };
});

import mockRequest from 'axios';
import getRecipes from './getRecipes';

describe('getRecipes', () => {
    it('returns all recipes', () => {
        return getRecipes()
            .then((resp) => {
                expect(resp).toEqual(mockResponse);
                expect(mockRequest.get).toHaveBeenCalledWith(`${API_URL}/recipes`);
            });
    })
});
