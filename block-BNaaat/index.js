let http = require('http');
let fs = require('fs');

let newServar = http.createServer(handle);

function handle(req, res){
  
  if(req.method === 'GET' && req.url === '/about'){
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  }
}

newServar.listen(5555, () => {
  console.log("server on port 5555");
})