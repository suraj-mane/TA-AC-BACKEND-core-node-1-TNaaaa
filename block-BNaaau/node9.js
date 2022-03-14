let http = require('http');
let url = require('url');


let server = http.createServer(handels);

function handels(req, res) {
  let urln = url.parse('/users?email=nodeserver@gmail.com');
}

server.listen(5051, () => {
  console.log("`server listening on port 5051`");
});