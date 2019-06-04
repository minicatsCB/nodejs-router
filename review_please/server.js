const http = require("http");
const router = require("./router.js");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    let template = router.route(req.url);
    res.statusCode = 200;
    res.setHeader("ContentType", "text/plain");
    res.end(template);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
