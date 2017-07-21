import React from 'react';
import { Link } from 'react-router-dom';

import Recipe from './Recipe';
import Favourite from './Favourite';
import getRecipe from '../services/getRecipe';

class DetailedRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = { recipe: undefined };
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        const id = pathname.substr(-1);
        getRecipe(id)
            .then(resp => this.setState({ recipe: resp.data }));
    }

    render() {
        const { favourites, ...rest } = this.props;

        return  (
            <div className='detailedRecipe'>
                <Link to='/'>Return to list</Link>
                { this.state.recipe ? (
                    <Recipe recipe={this.state.recipe}>
                        <Favourite favourite={favourites.includes(this.state.recipe.id)} {...rest} recipeId={this.state.recipe.id} />
                    </Recipe>
                    ) :
                    <div>Sorry, this recipe doesn't exist or may have been removed</div>
                }    
            </div>
        )  
    } 
};

export default DetailedRecipe;