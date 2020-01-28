const http = require('http');
const shortid = require('shortid');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  if (request.url === '/random') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(`Hello - ${shortid.generate()}`);
    response.end();
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<html><body><h1>Default Page!!!</h1></body></html>');
    response.end();
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
