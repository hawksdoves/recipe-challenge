import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiroutes from './routes/api';
import routes from './routes/index';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiroutes);

// I was going to do server side rendering, but I ran out of time.
// routes will not be used for v1 of this app
app.use('/', routes);

module.exports = app;
