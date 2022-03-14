let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  res.write('My first server in NodeJS');
  res.end();
}

server.listen(5100, () => {
  console.log("welcome to first server");
});