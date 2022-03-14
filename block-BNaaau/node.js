let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    res.setHeader('Content-Type','text/html')
    res.end('<h2>posted for first time</h2>');
  }
}

server.listen(5050, () => {
  console.log("`server listening on port 5050`");
});