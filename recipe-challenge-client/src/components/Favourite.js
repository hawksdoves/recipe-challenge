import React from 'react';
import { Button } from 'semantic-ui-react';

export default function Favourite(props) {
    const { addFavourite, recipeId, favourite, removeFavourite } = props

    return (
        favourite ?
            <Button color='red' icon='star' onClick={() => removeFavourite(recipeId)} /> :
            <Button color='blue' content='favourite me' onClick={() => addFavourite(recipeId)} />
        
    )
}
