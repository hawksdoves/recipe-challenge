const app = require('./server/app');
const server = require('http').createServer(app);

const port = process.env.PORT || 3001;

server.listen(port);

console.log(`Running Server at http://localhost:${port}/`);