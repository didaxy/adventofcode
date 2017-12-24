//day 24

const fs = require('fs');

let olength, lengths, weights

fs.readFile('input.day24.txt','utf8', (err, input) => {

  if (err) console.log("no file");
  let grid = input.split('\n').map(n => [...n.split('/')].map(m => Number(m)))
  console.log(grid);
  lengths = []
  weights = []
  olength = grid.length
  console.log(findBridges(grid, 0, 0))
//   console.log(`${lengths}`);
//   console.log(`${weights}`);
  
  maxlen = 0
  
  max = 0
  for (let index = 0; index < lengths.length; index++) {
      if (lengths[index] > maxlen) maxlen = lengths[index]
  }
  
console.log(`max length: ${maxlen}`);

  function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(lengths, maxlen);
console.log(`indexes: ${indexes}`);

maxies = []

for (let index = 0; index < indexes.length; index++) {
    maxies.push(weights[indexes[index]])
}

// console.log(maxies);

max = 0
for (let index = 0; index < maxies.length; index++) {
    if (maxies[index] > max) max = maxies[index]
}

console.log(max);

})

function findBridges(list, n, total) {
    let localtotals = []
    let tower
    // console.log(`finding ${n}`);
    // console.log(`list is ${list}`);
    for (let k = 0; k < list.length; k++) {

        
        if(list[k][0] == n || list[k][1] == n) {
            if (list[k][0] == n) nextelt = list[k][1]
            if (list[k][1] == n) nextelt = list[k][0]
            // console.log(`k is ${k}`);
            // console.log(`the element is: ${list[k]}`);
            
            newlist = list.slice(0,k).concat(list.slice(k + 1))
            // console.log(`newlist: ${newlist}`);
            // console.log(`list ${list}`);
            newtotal = total + list[k][0] + list[k][1]
            tower = list[k][0] + list[k][1] + findBridges(newlist, nextelt, newtotal)
            // console.log(`tower total: ${tower}`);
            
            localtotals.push(tower)
            // console.log(`localtotals is ${localtotals}`);
            
        } else {
            len = olength - list.length
            lengths.push(len)
            weights.push(total)
        }
    }
    // console.log(`local totals are: ${localtotals}`);
     localtotals.push(0)
    return Math.max(...localtotals) 
}