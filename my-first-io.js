'use-strict'
const fs = require('fs');

const filePath = process.argv[2];
if (fs.existsSync(filePath)) {
  const file = fs.readFileSync(filePath, 'utf8');
  console.log(file.split('').reduce((acc, cur) => cur === '\n' ? ++acc : acc, 0));
} else {
  console.log('File not found.');
}