'use-strict'
const port = process.argv[2]
const net = require('net')  
const server = net.createServer(function (socket) {  
    const date = new Date();
    const [Y,M,D,h,m] = [
        date.getFullYear(), 
        (date.getMonth() + 1).toString().padStart(2,'0'), // starts at 0  
        date.getDate().toString().padStart(2,'0'), // returns the day of month  
        date.getHours().toString().padStart(2,'0'),  
        date.getMinutes().toString().padStart(2,'0') 
    ]
    const res = `${Y}-${M}-${D} ${h}:${m}\n`;
    socket.end(res)
})  
server.listen(port)