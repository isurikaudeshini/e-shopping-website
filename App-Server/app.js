const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.hanlder);

server.listen(3000);
