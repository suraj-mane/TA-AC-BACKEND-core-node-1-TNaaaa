let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    const body = '<h1>welcome to node server</h1>';
    res.writeHead(200, {
      'Content': Buffer.byteLength(body),
      'Content-Type':'text/html'
    })
    res.end(body);
  }
}

server.listen(8000, () => {
  console.log("`server listening on port 8000`");
});