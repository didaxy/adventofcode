let input = `
10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6
`

let test = `0 2 7 0`

//remove me when working
// input = test

input = input.trim()

//split on
input = input.split(/\s/).map(n => Number(n))

//grid by whitespace
// let grid = rows.map(n => n.split(/\s+/))

// console.log(rows);

// console.log(`length: ${rows.length}`);

// console.log(grid);

// let maprows = rows.map(n => n)
// let reducerows = rows.reduce((sum,n) => sum + n, 0)
// let filterrows = rows.filter(n => true)
//

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
// while (true) {
//
// }

//rows
//find highest

let visited = []
// console.log(visited);
// let config = input

do {
  // console.log(input);
  newentry = input.slice(0)
  visited.push(newentry)
   // console.log(visited);
  redistribute(input)
  // console.log(visited);
} while (!dup())

function redistribute() {
  let highest = findhighest()
  // console.log(`highest is at ${highest}`);
  let todistribute = input[highest]
  input[highest] = 0
  let nextdrop = highest + 1
  // console.log(`dist: ${todistribute}`);
  while (todistribute > 0) {
      if (nextdrop == input.length) nextdrop = 0
      input[nextdrop] += 1
      todistribute -= 1
      nextdrop++
  }
}

function findhighest() {
  // console.log(input);
  let highest = Math.max(...input)
  let index = input.indexOf(highest)
  return index
}

function dup() {
  // console.log(`dup visited: ${visited}`);
  for (var i = 0; i < visited.length; i++) {
  //   if (visited(i) == input) {
  //   console.log(`match at ${input}`);
  // }
  // console.log(`i ${i} ${visited[i]}`);
  if (visited[i].length == input.length
    && visited[i].every(function(u, i) {
        return u === input[i];
    })
) {
   console.log(`match ${visited.length} ${input}, ${i}`);
   return true
}
}
    // console.log("no");
   return false

  }
