const fs = require('fs');
function loadRandomLine(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, fd) => {
      if (err) reject(err);
      else {
        const content = fd.split('\n');
        const i = Math.floor(Math.random() * content.length);
        const randomLine = content[i];
        resolve(randomLine);
      }
    });
  });
}

module.exports = loadRandomLine;
