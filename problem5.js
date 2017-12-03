let input = ``


// let input =`RRU`

let rows = input.split('\n')

let table = rows.map(n => n.split(''))

//split into 'columns' on arbitrary whitespace
//discards initial column
// let table = rows.map(n => {
//   let [a, ...b] = n.split(/\s+/)
//   return b.map(n => Number(n))
// })

//sort
// let sorted = table.map(n => n.sort((a,b) => a - b))

// console.log(sorted);

console.log("bo");
