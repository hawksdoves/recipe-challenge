import React from 'react';
import { Card } from 'semantic-ui-react';

import Ingredient from './Ingredient';

function Recipe(props) {
    const { recipe, children } = props;

    return recipe ? (
        <Card key={recipe.id}>
            <Card.Content>
                {children}
                <Card.Header style={{margin: 10}}>{recipe.name}</Card.Header>
                <Card.Meta>{recipe.time} minutes</Card.Meta>
                {recipe.ingredients.map(ingredient => {
                    return (
                        <Ingredient ingredient={ingredient} key={`${recipe.id}-${ingredient.name}`}/>
                    )
                })}
            </Card.Content>
        </Card>
    ) :
    null
}

export default Recipe;
