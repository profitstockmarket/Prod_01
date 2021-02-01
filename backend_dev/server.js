const http = require('http');

console.log("hello")
const server = http.createServer((request, response) => {
    // magic happens here!
  });
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'bacon'
  });