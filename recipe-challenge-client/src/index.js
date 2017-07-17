import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css'

import './index.css';
import App from './App';
import reducers from './reducers';
import getAllRecipes from './actions/getRecipes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))  
)

store.dispatch(getAllRecipes());

ReactDOM.render((
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>), 
document.getElementById('root'));

