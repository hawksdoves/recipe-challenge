import app from './server/app';
import { createServer } from 'http';

const server = createServer(app);

const port = process.env.PORT || 3001;

server.listen(port);

console.log(`Running Server at http://localhost:${port}/`);