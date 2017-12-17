const fs = require('fs');

fs.readFile('input.day1.txt','utf8', (err, input) => {
  console.log(input.trim().split("")
                 .map(n => Number(n))
                 .reduce((sum, n, index, arr) => {
                   return n == arr[(index + (arr.length / 2)) % arr.length] ? sum + n : sum;
                 }, 0));
})
