import React from 'react';
import { shallow } from 'enzyme';

import RecipeSearch from './RecipeSearch';
import List from './List';

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
    ]

    it('renders List', () => {
        const wrapper = shallow(<RecipeSearch recipes={recipes}/>)
        expect(wrapper).toMatchSnapshot()
    })

    it('only displays recipes that match search', () => {
        const wrapper = shallow(<RecipeSearch recipes={recipes}/>)
        wrapper.find('input').simulate('change', { target: { value: 'steak' } })
        expect(wrapper.find(List).length).toEqual(1)
        expect(wrapper).toMatchSnapshot()
    })

    it('renders error message if search had no matches', () => {
        const wrapper = shallow(<RecipeSearch recipes={recipes}/>)
        wrapper.find('input').simulate('change', { target: { value: 'fish' } })
        expect(wrapper.find(List).length).toEqual(0)
        expect(wrapper).toMatchSnapshot()
    })
});
