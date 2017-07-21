import React from 'react';
import { shallow } from 'enzyme';

import RecipeSearch from '../RecipeSearch';
import List from '../List';

describe('RecipeSearch', () => {
    const recipes = [
        {
            id: '1',
            name: 'steak',
            ingredients: [{
                name: 'steak',
                quantity: '3'
            }]
        },
        {
            id: '2',
            name: 'chicken',
            ingredients: [{
                name: 'chicken',
                quantity: '2'
            }]
        }
    ];

    it('renders children', () => {
        const wrapper = shallow(<RecipeSearch recipes={recipes} children={<List/>}/>);

        expect(wrapper).toMatchSnapshot();
    })

    it('should call searchRecipes on change', () => {
        const mockSearchRecipes = jest.fn();
        const wrapper = shallow(<RecipeSearch recipes={recipes} searchRecipes={mockSearchRecipes} />);
        wrapper.find('.recipeSearch').simulate('change', { target: { value: 'steak' } });

        expect(mockSearchRecipes).toHaveBeenCalled();
    })

    it('renders error message if search had no matches', () => {
        const wrapper = shallow(<RecipeSearch recipes={recipes}/>);
        wrapper.find('.recipeSearch').simulate('change', { target: { value: 'fish' } });
        
        expect(wrapper.find(List).length).toEqual(0);
        expect(wrapper).toMatchSnapshot();
    })
});
