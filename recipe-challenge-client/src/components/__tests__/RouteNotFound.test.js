import React from 'react';
import { shallow } from 'enzyme';

import RouteNotFound from '../RouteNotFound';

describe('RouteNotFound', () => {
    it('should render error message', () =>{
        const wrapper = shallow(<RouteNotFound />);

        expect(wrapper).toMatchSnapshot();
    })
})