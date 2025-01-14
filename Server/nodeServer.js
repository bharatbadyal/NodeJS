const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/internalDetails") {
    res.end("Are you fool");
  }
  res.end("Hello World!");
});

server.listen(3000);
