import React from 'react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function RouteNotFound() {
    return  (
        <Message negative>
            <Message.Header>This page does not exist!</Message.Header>
            <Link to='/'>CLICK HERE TO VIEW RECIPES</Link>
        </Message>
    ) 
}

export default RouteNotFound;
