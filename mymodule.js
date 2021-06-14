const fs = require('fs');
module.exports = function(dirPath, extension, callback) {
    fs.readdir(dirPath, (err, files) => {
        if (err) return callback(err);
        return callback(null, files.filter(
            el => {
                if (el.match(`^.*\.${extension}$`))
                    return true;
                return false;
            }
        ));
    })
}