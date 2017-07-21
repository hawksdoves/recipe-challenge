import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

function RecipeSearch(props) {
    const { searchRecipes } = props;

    return <Input 
                className='recipeSearch' 
                type="text" 
                placeholder="Recipe Search..." 
                onChange={searchRecipes} 
                icon={<Icon name='search' inverted circular link />} 
            />
}

export default RecipeSearch;
