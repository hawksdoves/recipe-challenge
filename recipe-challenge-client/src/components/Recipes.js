import React from 'react';

import RecipeSearch from './RecipeSearch';
import List from './List';

class Recipes extends React.Component {

    searchRecipes = (event) => {
        const updatedResults = this.props.recipes.filter(recipe => {
            return recipe.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
            });
        this.setState({ recipeResults: updatedResults});
    }

    state = {
        recipeResults: null
    }

    render() {
        const { recipes, ...rest } = this.props

        return  recipes && recipes.length > 0 ? (
            <div className='recipesContainer'>
                <RecipeSearch searchRecipes={this.searchRecipes} />
                <List recipes={this.state.recipeResults || recipes} {...rest} />
            </div>
        ) :
            <div>Sorry, we currently have no recipes for you</div>
    }
}

export default Recipes;
