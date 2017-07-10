import request from 'supertest';
import express from 'express';

import route from './index';

const app = express()
app.use(route)

describe('/', () => {
    it('returns correct content', () => {
        return request(app)
            .get('/')
            .expect(200)
            .then((response) => {
                expect(response.text).toEqual('<div>Recipes This Way</div>');
            });
    });
})

describe('*', () => {
    it('returns 404 and dispays img', () => {
        return request(app)
            .get('/hello')
            .expect(404)
            .then((response) => {
                expect(response.text).toEqual('<img src="https://68.media.tumblr.com/40076dabd68b03a7a43cbf30b2ce6c2a/tumblr_miwsyuB8UX1r2uma6o1_500.gif">');
            });
    });
})
