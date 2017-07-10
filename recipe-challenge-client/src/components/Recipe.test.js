import React from 'react';
import { shallow } from 'enzyme';

import Recipe from './Recipe';

describe('Recipe', () => {
    it('should render the recipe correctly', () =>{
        const recipe = {
            id: '1',
            ingredients: [
                {
                    name: 'steak',
                    quantity: '3'
                }
            ]
        }
        const wrapper = shallow(<Recipe recipe={recipe} />);

        expect(wrapper).toMatchSnapshot()
    })

    it('should render error message if recipe does not exist', () =>{
        const wrapper = shallow(<Recipe />);

        expect(wrapper).toMatchSnapshot()
    })
});
