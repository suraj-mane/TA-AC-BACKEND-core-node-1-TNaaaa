let http = require('http');


let server = http.createServer(handels);

function handels(req, res) {
  if(req.method === 'GET', req.url === '/'){
    res.json({success:true, message: "Welcome to Nodejs"});
    res.end();
  }
}

server.listen(8888, () => {
  console.log("`server listening on port 8888`");
});