'use-strict'
const urls = process.argv.slice(2, 5);
const http = require('http');
let done = 0;
let datas = ['', '', ''];
urls.forEach((url, index) =>
    http.get(url, res => {
        res.setEncoding('utf8')
        res.on('data', (data) => datas[index] += data)
        res.on('end', () => {
            if (done >= 2) datas.forEach(el => console.log(el));
            ++done;
        })
        res.on('error', console.error)
    }).on('error', console.error)
)