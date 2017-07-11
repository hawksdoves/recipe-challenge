import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import getRecipe from '../services/getRecipe';

class DetailedRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = { recipe: undefined };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getRecipe(id)
            .then(resp => this.setState({ recipe: resp.data }))
    }

    render() {
        return (
            <div>
                <Link to='/recipes'>Return to list</Link >
                <Recipe recipe={this.state.recipe} />
            </div>
        )
    }
    
};

export default DetailedRecipe;