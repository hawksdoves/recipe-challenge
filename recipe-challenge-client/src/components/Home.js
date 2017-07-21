import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import DetailedRecipe from './DetailedRecipe';
import Recipes from './Recipes';
import RouteNotFound from './RouteNotFound';

class Home extends React.Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        const { recipes, isFetchingRecipes, ...rest } = this.props;

        return !isFetchingRecipes ? (
            <Switch>
                <Route exact path="/" render={(props) => (<Recipes {...rest} recipes={recipes} />)} />
                <Route path="/recipe/:id" render={(props) => (<DetailedRecipe {...rest}  />)} />
                <Route path='*' component={RouteNotFound} />
            </Switch>
        ) :
            <Loader active inline='centered' />
    }
};

export default Home;
