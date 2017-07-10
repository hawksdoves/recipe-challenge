import request from 'axios';

const API_URL = 'http://localhost:3001/api';

function getRecipes() {    
    return request.get(`${API_URL}/recipes`);
}

export default getRecipes;