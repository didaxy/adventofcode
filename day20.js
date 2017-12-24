const fs = require('fs');

fs.readFile('dummy.day20.txt','utf8', (err, input) => {
  if (err) console.log("no file");
  let grid = input.split('\n').map(n => n.split(''))
  console.log(grid);

})
