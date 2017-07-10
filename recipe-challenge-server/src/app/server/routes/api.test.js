import request from 'supertest';
import express from 'express';

import recipes from '../../../../dataMocks/recipes.json';
import getRecipe from '../../../../dataMocks/recipe';
import route from './api';

const app = express()
app.use(route)

describe('/', () => {
    it('should return success path', () => {
        return request(app)
            .get('/')
            .expect(200)
    });
})

describe('/recipes', () => {
    it('should return success path and return recipes json', () => {
        return request(app)
            .get('/recipes')
            .expect(200)
            .then((response) => {
                expect(response.text).toEqual(JSON.stringify(recipes));
            });
    });
})

describe('/recipe:id', () => {
    it('should return success path and return recipe with id', () => {
        return request(app)
            .get('/recipe/2')
            .expect(200)
            .then((response) => {
                expect(response.text).toEqual(JSON.stringify(getRecipe('2')));
            });
    });
})
