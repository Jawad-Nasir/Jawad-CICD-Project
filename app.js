const http = require('http');
http.createServer((req, res) => {
 res.writeHead(200);
 res.end('<html><h1>Hello from Jenkins Pipeline! v2</h2></html>\n');
}).listen(3000, () => console.log('Running on port 3000'));
