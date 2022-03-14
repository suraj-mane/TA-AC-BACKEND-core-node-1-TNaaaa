let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    res.sratusCode = 200;
    res.write('welcome to node server');
    res.end();
  }
}

server.listen(3333, () => {
  console.log("`server listening on port 3333`");
});