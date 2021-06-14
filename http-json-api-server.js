'use-strict'
const port = process.argv[2]
const http = require('http')
const routes = {
    '/api/parsetime': (date, res) => {
        const obj = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(obj))
    },
    '/api/unixtime': (date, res) => {
        const obj = {unixtime: date.getTime()}
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(obj))
    },
}
const server = http.createServer(function (req, res) {
    const url = new URL(req.url, 'http://localhost');
    const iso = url.searchParams.get('iso');
    const date = new Date(iso);
    routes[url.pathname](date, res);
})
server.listen(port)