let http = require("http");

let getUrl = http.createServer(handel);

function handel(req,res) {
  console.log(req.method);
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>welcome</h1>');
}

getUrl.listen(4444, () => {
  console.log('The server is on port 4444');
})