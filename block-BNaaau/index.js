let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  res.write('welcome');
  res.end();
}

server.listen(5000, () => {
  console.log("welcome to first server");
})