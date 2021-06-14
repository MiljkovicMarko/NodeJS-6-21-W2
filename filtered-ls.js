'use-strict'
const fs = require('fs');
const [dirPath, extension] = process.argv.slice(2, 4);
fs.readdir(dirPath, { encoding: 'utf8', withFileTypes: true }, (err, files) => {
  if (err) return console.log(err);
  files.forEach(
    el => {
      const name = el.name;
      if (el.isFile() && name.match(`^.*\.${extension}$`))
        console.log(name)
    }
  );
})