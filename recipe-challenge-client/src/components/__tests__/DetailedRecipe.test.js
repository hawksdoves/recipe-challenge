import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Recipe from '../Recipe';

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
    };
});

import DetailedRecipe from '../DetailedRecipe';

describe('DetailedRecipe', () => {
    it('should render the recipe correctly', () =>{
        const wrapper = shallow(<DetailedRecipe favourites={[]}/>);
        wrapper.setState({ recipe: mockResponse.data });
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
    })

    it('should display message when the recipe does not exist', () =>{
        const wrapper = shallow(<DetailedRecipe favourites={[]}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it('calls componentDidMount() lifecycle method', () => {
        const mockParamsId = { pathname: 'd/1' };
        const componentDidMountSpy = jest.spyOn(DetailedRecipe.prototype, 'componentDidMount');
        const wrapper = mount(<MemoryRouter><DetailedRecipe location={mockParamsId} favourites={[]}/></MemoryRouter>);
        expect(componentDidMountSpy).toHaveBeenCalled();
    });
});
