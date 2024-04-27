var http = require("http");
http
  .createServer(function (req, res) {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is Home Page<h1>");
    } else if (req.url === "/about" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is About Page<h1>");
    } else {
      res.writeHead(404);
      res.end("Sorry Page not found");
    }
  })
  .listen(8080);
