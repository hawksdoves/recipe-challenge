import React from 'react';

import getRecipes from '../services/getRecipes';
import RecipeSearch from './RecipeSearch';

function Home(props) {
    const { recipes } = props

        return (
            <div>
                <h1>Welcome to Recipes'R'Us </h1>
                { recipes.length > 0 ?
                    <RecipeSearch recipes={props.recipes} /> :
                    <div>Sorry, we currently have no recipes for you</div>
                }
            </div>
        )
};

export default Home;