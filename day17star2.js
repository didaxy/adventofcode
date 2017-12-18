// 53978

let step = 376

let buffer = [0,1]

let pos = 1

let newpos, templen

// console.log(buffer);

// let afterzeros =[[]]
let row = 0

let bufferlength = 2


for (var i = 2; i < 50000001; i++) {
   newpos = ((pos + step) % (bufferlength))
   bufferlength++
   if (newpos == 0) neighbour = i
   pos = newpos + 1
}

console.log(neighbour);
//
// console.log(buffer);
//
// elt = buffer.indexOf(0)
//
// console.log(elt);
//
// console.log(buffer[elt + 1]);

// const fs = require('fs');
//
// fs.readFile('dummy.day17.txt','utf8', (err, data) => {
//   if (err) {
//     console.log("no file!!!!!!");
//   } else {
//   console.log("hey yo");
// }


  // console.log(`checksum is ${data.trim()
  //             .split('\n')
  //             .map(row => row.split(/\s/)
  //                            .map(n => Number(n))
  //                            .sort((a,b) => a - b)
  //                            .reduce((total,n,i,arr) => {
  //                              for(let k = i + 1; k < arr.length; k++) {
  //                                console.log(`${arr[k] % n}`)
  //                                if (arr[k] % n == 0) return total + (arr[k] / n)
  //                              }
  //                              return total
  //                            },0))
  //                            .reduce((sum,n) => sum + n,0)
  // }`);
// })
