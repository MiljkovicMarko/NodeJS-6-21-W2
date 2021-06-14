'use-strict'
const [dirPath, extension] = process.argv.slice(2, 4);
const extensionFn = require('./mymodule')
function callbackFn(err, data) {
    if (err) return console.error(err)
    return data.forEach(el=>console.log(el));
}
extensionFn(dirPath, extension, callbackFn);