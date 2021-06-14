'use-strict'
const url = process.argv[2];
const http = require('http');
let fullData = '';
http.get(url, res => {
    res.setEncoding('utf8')
    res.on('data', (data) => fullData+=data)
    res.on('end', () => {
        console.log(fullData.length);
        console.log(fullData);
    })
    res.on('error', console.error)
}).on('error', console.error);