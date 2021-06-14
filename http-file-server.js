'use-strict'
const [port, path] = process.argv.slice(2,4);
const http = require('http')  
const fs = require('fs');
const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(path).pipe(response);
})  
server.listen(port)