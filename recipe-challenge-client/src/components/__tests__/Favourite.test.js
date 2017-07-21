import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';

import Favourite from '../Favourite';

describe('Favourite', () => {
    it('should render text Un-Favourite Me when favourite', () =>{
        const wrapper = shallow(<Favourite favourite={true} />);
        
        expect(wrapper).toMatchSnapshot();
    })

    it('should render text Favourite Me when favourite', () =>{
        const wrapper = shallow(<Favourite />);

        expect(wrapper).toMatchSnapshot();
    })

    it('should call removeFavourite onclick ', () =>{
        const mockRemoveFavourite = jest.fn();
        const wrapper = shallow(<Favourite favourite={true} removeFavourite={mockRemoveFavourite} />);
        wrapper.find(Button).simulate('click');

        expect(mockRemoveFavourite).toHaveBeenCalled();
    })

    it('should call addFavourite onclick ', () =>{
        const mockAddFavourite = jest.fn();
        const wrapper = shallow(<Favourite addFavourite={mockAddFavourite} />);
        wrapper.find(Button).simulate('click');

        expect(mockAddFavourite).toHaveBeenCalled();
    })
});
