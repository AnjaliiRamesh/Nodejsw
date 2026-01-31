const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("New req rec")
    // console.log(req)
    res.end('Hello from my server');
});

myserver.listen(8000, () => {
    console.log("Server listening on port 8000");
});