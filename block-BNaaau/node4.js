let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    res.write('welcome to node server');
    res.end();
  }
}

server.listen(7000, () => {
  console.log("`server listening on port 7000`");
});