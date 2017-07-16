import React from 'react';

import getRecipes from '../services/getRecipes';
import RecipeSearch from './RecipeSearch';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { recipes: [] };
    }

    componentDidMount() {
        getRecipes()
            .then(resp => resp.data ? this.setState({ recipes: resp.data.recipes }) : null)
    }

    render() {
        return (
            <div>
                <h1>Welcome to Recipes'R'Us </h1>
                { this.state.recipes.length > 0 ?
                    <RecipeSearch recipes={this.state.recipes} /> :
                    <div>Sorry, we currently have no recipes for you</div>
                }
            </div>
        )
    }
    
};

export default Home;