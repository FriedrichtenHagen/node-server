const fs = require('fs')
const path = require('path');


const content = 'Some content!';

fs.writeFile('/home/friedrichtenhagen/node-server/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});