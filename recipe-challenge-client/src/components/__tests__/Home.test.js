import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter, Route } from 'react-router-dom';

import Recipes from '../Recipes';

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
};

jest.mock('axios', () => {
    const mockGetRequest = jest.fn(() => Promise.resolve(mockResponse));

    return {
        get: mockGetRequest
    };
});

import Home from '../Home';

describe('Home', () => {
    
    it('should render all the recipes correctly', () => {
        const wrapper = shallow(<Home recipes={mockResponse.data.recipes} />);
        wrapper.setState({ recipes: mockResponse.data.recipes });

        expect(wrapper).toMatchSnapshot();
    })

    it('should display loader when fetching recipes', () =>{
        const wrapper = shallow(<Home isFetchingRecipes={true} />);

        expect(wrapper).toMatchSnapshot();
    })

    it('calls componentDidMount() lifecycle method which calls getRecipes', () => {
        const mockGetRecipes = jest.fn();
        const componentDidMountSpy = jest.spyOn(Home.prototype, 'componentDidMount');
        const wrapper = mount(
            <StaticRouter location="/" context={{}}>
                <Home recipes={mockResponse.data.recipes} getRecipes={mockGetRecipes} favourites={[]} />
            </StaticRouter>
        );

        expect(componentDidMountSpy).toHaveBeenCalled();
        expect(wrapper.find(Home).props().getRecipes).toHaveBeenCalled();
        expect(wrapper.find(Route).find(Recipes).length).toEqual(1);
    })

});
