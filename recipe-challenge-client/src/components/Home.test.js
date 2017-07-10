import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from './Home';

describe('Home', () => {
    
    it('should render all the recipes correctly', () => {
        const wrapper = shallow(<Home />);

        expect(wrapper).toMatchSnapshot()
    })

    it('should display error message if there are no recipes', () =>{

        const wrapper = shallow(<Home />);

        expect(wrapper).toMatchSnapshot()
    })
});
