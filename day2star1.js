// 53978

const fs = require('fs');

fs.readFile('input.day2.txt','utf8', (err, data) => {
  console.log(`checksum is ${data.trim()
              .split('\n')
              .map(row => row.split(/\s/))
              .map(row => Math.max(...row) - Math.min(...row))
              .reduce((sum, n) => sum + n, 0)
  }`);
})
