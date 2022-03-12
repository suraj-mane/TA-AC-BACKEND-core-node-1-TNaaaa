let http = require("http");

let basicserver = http.createServer(handel);

function handel(req, res){
  if(req.method === 'GET' && req.url === '/') {
    res.write('Welcome to page');
  } else if(req.method === 'GET' && req.url === '/about'){
    res.write('are you on about page');
  } else if(req.method === 'POST' && req.url === '/about') {
    res.write('same page')
  }
  res.end('welcome'); 
}

basicserver.listen(5000, () => {
  console.log("server on port 5000");
})