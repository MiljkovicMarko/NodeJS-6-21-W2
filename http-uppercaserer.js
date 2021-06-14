'use-strict'
const port = process.argv[2];
const http = require('http')
const stream = require('stream');
const { Transform } = require('stream');
const toUpperTrans = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

const server = http.createServer(function (req, res) {
    console.log(req.headers);
    if (req.method === 'POST') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        req.pipe(toUpperTrans).pipe(res);
        // res.write(req.headers);
        // res.end();
    }
    
    // fs.createReadStream(path).pipe(response);
})  
server.listen(port)