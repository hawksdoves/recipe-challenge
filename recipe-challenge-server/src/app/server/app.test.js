import request from 'supertest';
import apiRoutes from './routes/api';
import routes from './routes/index';
import app from './app';

describe('app', () => {
    it('should use api route when /api', () => {
        const apiRoutesSpy = jest.spyOn(apiRoutes, 'handle');
        return request(app)
            .get('/api')
            .expect(200)
            .then(() => {
                expect(apiRoutesSpy).toHaveBeenCalled();
                apiRoutesSpy.mockReset();
                apiRoutesSpy.mockRestore();
            });
    });

    it('should use routes for /', () => {
        const routesSpy = jest.spyOn(routes, 'handle');
        return request(app)
            .get('/')
            .expect(200)
            .then(() => {
                expect(routesSpy).toHaveBeenCalled();
                routesSpy.mockReset();
                routesSpy.mockRestore();
            });
    });
})