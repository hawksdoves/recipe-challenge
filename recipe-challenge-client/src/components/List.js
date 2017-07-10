import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import Recipe from './Recipe';

function List(props) {
    const { recipes } = props

    return (
        <div>
            <Card.Group>
            {recipes.map(recipe => {
                return (
                    
                            <Link to={`/recipe/${recipe.id}`} key={`Link-${recipe.id}`} className='card'>
                                <Recipe recipe={recipe} key={recipe.id} />
                            </Link>
                 
                )
            })}
            </Card.Group>
        </div>
    )
    
};

export default List;