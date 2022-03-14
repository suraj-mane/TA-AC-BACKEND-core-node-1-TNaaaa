let http = require('http');
let fs = require('fs');
let url = require('url');

var server = http.createServer(handalApp);

function handalApp(req, res) {
  let parsedURL = url.parse(req.url);
  let pathName = parsedURL.pathname.split("/")[1];
  if(req.method === "GET" && pathName === ""){
      res.writeHead(200, {'Content-type':'text/html'});
      fs.createReadStream("./index.html").pipe(res);
  } else if(req.method === "GET" && pathName === "about"){
      res.writeHead(200, {'Content-type':'text/html'});
      fs.createReadStream("./about.html").pipe(res);
  } else if (req.url.split(".").pop() === "css") {
    res.writeHead(200, {'Content-type':'text/css'});
    fs.createReadStream("." + req.url).pipe(res);     
  } else if(req.method === "GET" && (parsedURL.pathname.split(".").pop().toLowerCase() === "jpg" || parsedURL.pathname.split(".").pop().toLowerCase() === "jpeg" || parsedURL.pathname.split(".").pop().toLowerCase() === "png")){
    res.writeHead(200, {'Content-type':`image/${parsedURL.pathname.split(".").pop().toLowerCase()}`});
    console.log(req.url);
    fs.createReadStream("." + req.url).pipe(res);
  } else if(req.url.split(".").pop() === "js"){
    res.writeHead(200, {'Content-type':'text/plan'});
    fs.createReadStream("." + req.url).pipe(res);  
  }
  else {
    res.writeHead(404, {'Content-type':'text/html'});
    res.end("<h1>Page not Found</h1>");
 }
}
server.listen(3000, ()=> {
console.log("Server is listening on 3000");
})