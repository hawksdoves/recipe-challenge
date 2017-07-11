import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import List from './List';

const API_URL = 'http://localhost:3001/api';

const mockResponse = {
    data: {
        "recipes": [
            {
                "id": "1",
                "name": "Lemon Chicken",
                "time": "30",
                "ingredients": [
                    { "name": "Chicken" } ,
                    { "name": "Lemon" }
                ]
            }, 
            {
                "id": "2",
                "name": "Beef Stroganoff",
                "time": "30",
                "ingredients": [
                    { "name": "Beef" },
                    { "name": "Mustard" },
                    { "name": "Mushrooms" }
                ]
            }
        ]
    }
}

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    }
});

import Home from './Home';

describe('Home', () => {
    
    it('should render all the recipes correctly', () => {
        const wrapper = shallow(<Home />);
        wrapper.setState({ recipes: mockResponse.data.recipes })
        expect(wrapper).toMatchSnapshot()
    })

    it('should display error message if there are no recipes', () =>{
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot()
    })

    it('calls componentDidMount() lifecycle method', () => {
        const componentDidMountSpy = jest.spyOn(Home.prototype, 'componentDidMount');
        const wrapper = mount(<MemoryRouter><Home /></MemoryRouter>);

        expect(componentDidMountSpy).toHaveBeenCalled();
    });
});
