import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import DetailedRecipe from './components/DetailedRecipe';
import RouteNotFound from './components/RouteNotFound';

function App(props) {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/recipes" component={Home} />
        <Route exact path="/recipe/:id" component={DetailedRecipe} />
        <Route path='*' component={RouteNotFound} />
      </Switch>
    </div>
  )
}

export default App;
