import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

describe('List', () => {
    it('should render all the recipes correctly', () =>{
        const recipes = [
            {
                id: '1',
                ingredients: [{
                    name: 'steak',
                    quantity: '3'
                }]
            },
            {
                id: '2',
                ingredients: [{
                    name: 'chicken',
                    quantity: '2'
                }]
            }
        ]
        const wrapper = shallow(<List recipes={recipes} />);

        expect(wrapper).toMatchSnapshot()
    })
});
