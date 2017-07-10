import React from 'react';

function Ingredient(props) {
    const { ingredient } = props

    return (
        <div key={ingredient.name}>
            { ingredient.quantity ?
                ingredient.measure ? 
                    `${ingredient.quantity} ${ingredient.measure} ` :
                    `${ingredient.quantity} x ` :
                    null
            }
            {ingredient.name}
        </div>
    )
};

export default Ingredient;