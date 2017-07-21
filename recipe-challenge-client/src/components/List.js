import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import Recipe from './Recipe';
import Favourite from './Favourite';

function List(props) {
    const { recipes, favourites, ...rest } = props;

    return recipes.length > 0 ?
        (<Card.Group >
            { recipes.map(recipe => {
                return (  
                    <div key={recipe.id} className='recipe' >
                        <Link to={`/recipe/${recipe.id}`} key={`Link-${recipe.id}`} className='card'>
                            <Recipe recipe={recipe} />
                        </Link>
                        <Favourite favourite={favourites.includes(recipe.id)} {...rest} recipeId={recipe.id} />
                    </div>
                )
            })}
        </Card.Group> ) :
        <div>Sorry, nothing matched your filter term</div>
};

export default List;
