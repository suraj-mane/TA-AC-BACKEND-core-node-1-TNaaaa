let http = require("http");

let getUrl = http.createServer(handel);

function handel(req,res) {
  res.statusCode(400);
  res.end('welcome');
}

getUrl.listen(4444, () => {
  console.log('The server is on port 4444');
})