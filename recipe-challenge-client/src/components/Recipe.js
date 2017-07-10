import React from 'react';
import { Card } from 'semantic-ui-react';

import Ingredient from './Ingredient';

function Recipe(props) {
    const { recipe } = props
    if (recipe) {
        return (
            <Card key={recipe.id} >
                <Card.Content>
                    <Card.Header>{recipe.name}</Card.Header>
                    <Card.Meta>{recipe.time} minutes</Card.Meta>
                    {recipe.ingredients.map(ingredient => {
                        return (
                            <Ingredient ingredient={ingredient} key={`${recipe.id}-${ingredient.name}`}/>
                        )
                    })}
                </Card.Content>
            </Card>
        )
    }
    return <div>Sorry, this recipe doesn't exist or may have been removed</div>
};

export default Recipe;