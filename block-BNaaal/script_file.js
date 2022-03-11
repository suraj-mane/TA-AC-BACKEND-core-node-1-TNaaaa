let http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res){
  res.end('Welcome');
}

server.listen(4000, () => {
  console.log('server is start on port 4000');
});