import React from 'react';
import { shallow } from 'enzyme';

import Ingredient from './Ingredient';

describe('Ingredient', () => {
    it('should render the ingredient and measurement correctly ', () =>{
        const ingredient = {
            name: 'thyme',
            quantity: '3',
            measure: 'tsp'
        }

        const wrapper = shallow(<Ingredient ingredient={ingredient} />);

        expect(wrapper).toMatchSnapshot()
    })

    it('should render only the ingredient and quantity correctly ', () =>{
        const ingredient = {
            name: 'steak',
            quantity: '3'
        }

        const wrapper = shallow(<Ingredient ingredient={ingredient} />);

        expect(wrapper).toMatchSnapshot()
    })

    it('should render only the ingredient correctly ', () =>{
        const ingredient = {
            name: 'steak'
        }

        const wrapper = shallow(<Ingredient ingredient={ingredient} />);

        expect(wrapper).toMatchSnapshot()
    })
});
