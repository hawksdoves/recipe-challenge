import React from 'react';
import { shallow, mount } from 'enzyme';

import DetailedRecipe from './DetailedRecipe';

describe('DetailedRecipe', () => {
    it('should render the recipe correctly', () =>{
        const wrapper = shallow(<DetailedRecipe />);

        expect(wrapper).toMatchSnapshot()
    })

    // it('calls componentDidMount() lifecycle method', () => {
    //     const mockParamsId = { params: { id: '1' } };
    //     const componentDidMountSpy = jest.spyOn(DetailedRecipe.prototype, 'componentDidMount');
    //     const wrapper = mount(<DetailedRecipe />);

    //     expect(componentDidMountSpy).toHaveBeenCalled();

    //     componentDidMountSpy.restore();
    // });
});
