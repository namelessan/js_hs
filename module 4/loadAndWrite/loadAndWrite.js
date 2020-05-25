const fs = require('fs');

// solution 1
function loadAndWrite(file, outputFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, fd) => {
      if (err) reject(err);

      const content = fd.split('\n');
      const i = Math.floor(Math.random() * content.length);
      const randomLine = content[i];
      fs.appendFile(outputFile, randomLine, (err) => {
        if (err) reject(err);
        resolve('Success!');
      });
    });
  });
}

// solution 2
function loadAndWrite(file, outputFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, fd) => {
      if (err) reject(err);

      const content = fd.split('\n');
      const i = Math.floor(Math.random() * content.length);
      const randomLine = content[i];
      resolve(randomLine);
    });
  }).then((randomLine) => {
    return new Promise((resolve, reject) => {
      fs.appendFile(outputFile, randomLine, (err) => {
        if (err) reject(err);
        resolve('Success!');
      });
    });
  });
}
