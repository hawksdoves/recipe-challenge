import request from 'axios';

const API_URL = 'http://localhost:3001/api';

function getRecipe(id) {    
    return request.get(`${API_URL}/recipe/${id}`);
}

export default getRecipe;