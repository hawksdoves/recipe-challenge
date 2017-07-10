const mockResponse = {
    recipe: ['Hello', 'is it me', 'you are looking for']
};

const API_URL = 'http://localhost:3001/api';

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    }
});

import mockRequest from 'axios';
import getRecipe from './getRecipe';

describe('getRecipe', () => {
    it('returns the specific recipe', () => {   
        return getRecipe('1')
            .then((resp) => {
                expect(resp).toEqual(mockResponse);
                expect(mockRequest.get).toHaveBeenCalledWith(`${API_URL}/recipe/1`);
            });
    })
});
