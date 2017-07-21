import React from 'react';
import { Route } from 'react-router-dom';

import { default as Home } from './containers/Home';

function App(props) {

  return (
    <div className='App'>
      <h1>Welcome to Recipes'R'Us </h1>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
