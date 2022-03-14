let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  req.header = 'GET';
  res.end('welcome');
}

server.listen(5555, () => {
  console.log("welcome to first server");
});