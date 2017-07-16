import React from 'react';

import List from './List';

class RecipeSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = { recipeResults: props.recipes }
        this.searchRecipes = this.searchRecipes.bind(this)
    }

    searchRecipes(event) {
        const updatedResults = this.props.recipes.filter(recipe => {
            return recipe.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
            });
        this.setState({ recipeResults: updatedResults});
    }

    render(props) {
        return (
            <div>
                <input type="text" placeholder="Recipe Search" onChange={this.searchRecipes} />
                { this.state.recipeResults.length > 0 ?
                    <List recipes={this.state.recipeResults} /> :
                    <div>Sorry, nothing matched your filter term</div>
                }
            </div>
        )
    }
}

export default RecipeSearch;
