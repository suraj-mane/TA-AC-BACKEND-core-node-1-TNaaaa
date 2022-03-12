let http = require("http");

let serverUrl = http.createServer(handle);

function handle(req, res){
  console.log(req.method, req.url);
  res.end('welocome');
}

serverUrl.listen(3000, () => {
  console.log('now server is start o port 3000');
})