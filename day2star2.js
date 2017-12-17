// 53978

const fs = require('fs');

fs.readFile('input.day2.txt','utf8', (err, data) => {
  console.log(`checksum is ${data.trim()
              .split('\n')
              .map(row => row.split(/\s/)
                             .map(n => Number(n))
                             .sort((a,b) => a - b)
                             .reduce((total,n,i,arr) => {
                               for(let k = i + 1; k < arr.length; k++) {
                                 console.log(`${arr[k] % n}`)
                                 if (arr[k] % n == 0) return total + (arr[k] / n)
                               }
                               return total
                             },0))
                             .reduce((sum,n) => sum + n,0)
  }`);
})
