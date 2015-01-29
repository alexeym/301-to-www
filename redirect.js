require('http').createServer(function (request, response) {
  response.writeHead(301, {"Location": "http://www." + request.headers.host + request.url});
  response.end();
}).listen(80);
