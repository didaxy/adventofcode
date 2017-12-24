const fs = require('fs');

console.log("yo")

fs.readFile('input.day22.txt','utf8', (err, input) => {
  console.log(input.trim().split(""))
})
