const http = require('http');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }
// //createserver is a method here which has an argument as requestlistener . Request listener is defined above  
// const server = http.createServer(requestListener);
// server.listen(process.env.PORT);


const server = http.createServer((req,res) => {
    res.end('hello');
    
 });

 server.listen(process.env.PORT||3001);

