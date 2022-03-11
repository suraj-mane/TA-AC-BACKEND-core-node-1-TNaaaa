let url = require("url");

let parseUrl = url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`);

console.log(parseUrl);
console.log(parseUrl.query);
console.log(parseUrl.pathname);
console.log(parseUrl.protocol);
