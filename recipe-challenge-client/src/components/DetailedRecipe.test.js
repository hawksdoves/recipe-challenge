import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Recipe from './Recipe';

const mockResponse = {
    data: {
        "id": "1",
        "name": "Lemon Chicken",
        "time": "30",
        "ingredients": [
            {
                "name": "Chicken",
                "quantity": "4"
            },
            {
                "name": "Lemon",
                "quantity": "1"
            },
            {
                "name": "Thyme",
                "quantity": "1",
                "measure": "tsp"
            }
        ]
    }
}

const API_URL = 'http://localhost:3001/api';

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    }
});

import DetailedRecipe from './DetailedRecipe';

describe('DetailedRecipe', () => {
    it('should render the recipe correctly', () =>{
        const wrapper = shallow(<DetailedRecipe />);

        expect(wrapper).toMatchSnapshot()
    })

    it('calls componentDidMount() lifecycle method', () => {
        const mockParamsId = { params: { id: '1' } };
        const componentDidMountSpy = jest.spyOn(DetailedRecipe.prototype, 'componentDidMount');
        const wrapper = mount(<MemoryRouter><DetailedRecipe match={mockParamsId}/></MemoryRouter>);
        expect(componentDidMountSpy).toHaveBeenCalled();
    });
});
