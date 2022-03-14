let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    res.setHeader('Content-Type','text/plain')
    res.end('posted for first time');
  }
  if(req.method === 'GET', req.url === '/about'){
    res.setHeader('Content-Type','text/html')
    res.end('./about.html');
  }
  if(req.method === 'GET', req.url === '/user'){
    res.setHeader('Content-Type','text/html')
    res.end('<2>posted for first time</2>');
  }
}

server.listen(2345, () => {
  console.log("`server listening on port 2345`");
});