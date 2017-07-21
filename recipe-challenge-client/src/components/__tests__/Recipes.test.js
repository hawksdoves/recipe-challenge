import React from 'react';
import { shallow, mount } from 'enzyme';

import RecipeSearch from '../RecipeSearch'
import Recipes from '../Recipes';
import List from '../List';

const recipes = [
    {
        id: '1',
        name: 'steak'         
    },
    {
        id: '2',
        name: 'chicken'
    }
];

describe('Recipes', () => {
    it('should render RecipeSearch and List', () =>{
        const favourites = [];
        const wrapper = shallow(<Recipes recipes={recipes} />);

        expect(wrapper).toMatchSnapshot();
    })

    it('should display message if there are no recipes', () =>{
        const favourites = [];
        const wrapper = shallow(<Recipes recipes={[]} favourites={favourites} />);

        expect(wrapper).toMatchSnapshot();
    })

    it('should update recipeResults state when searchRecipes is called', () =>{
        const favourites = [];
        const wrapper = shallow(<Recipes recipes={recipes} favourites={favourites} />);
        const searchRecipesSpy = jest.spyOn(wrapper.instance(), 'searchRecipes');
        const setStateSpy = jest.spyOn(wrapper.instance(), 'setState');
        const event = { target: { value: 'steak' } };
        wrapper.instance().searchRecipes(event);

        expect(searchRecipesSpy).toHaveBeenCalledWith(event);
        expect(setStateSpy).toHaveBeenCalled();
    })

});
