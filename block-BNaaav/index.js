let http = require('http');
let fs = require('fs');

var server = http.createServer(handalApp);

function handalApp(req,res){
  if(req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-type', 'text/html');
    fs.ReadStream('./about.html').pipe(res);
    res.end();
  }
}

server.listen(5000, () => {
  console.log('You are in port 5000');
});