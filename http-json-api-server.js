const http = require("http");
const url = require("url");

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

const server = http.createServer(function (request, response) {
  var myurl = url.parse(request.url, true);
  var time = new Date(myurl.query.iso);
  var result = /^\/api\/parsetime/.test(request.url)
    ? parsetime(time)
    : unixtime(time);

  if (result) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(Number(process.argv[2]));
