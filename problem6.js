// input = 277678
//279138
input = 277678
let i = 0
let solution = []
solution[0] = [[1]]
matched = false





function pad(arr) {
  let currsize = arr.length
  let freshrow1 = [Array(currsize + 2).fill(0)]
  let freshrow2 = [Array(currsize + 2).fill(0)]
  // console.log(currsize);
  let paddedinner = arr.map(n => [0].concat(...n).concat([0]))
  let paddedouter = freshrow1.concat(paddedinner).concat(freshrow2)
  // console.log(paddedouter);
  return paddedouter
}

while (!matched) {
  i += 1
  // console.log(i);
  solution[i] = pad(solution[i-1])
  // console.log(solution[i]);

  column = 2 * i
  row = column - 1
    // console.log(`${row}, ${column} = ${solution[i][row][column]}`);
  length = 8 * i
  for (var count = 0; count < length; count++) {
    // console.log(`count is ${count}`);
    solution[i][row][column] = addadjacents(solution[i], row, column)
    if (solution[i][row][column] > input) {
      matched = true;
      console.log(`${solution[i][row][column]}`);
    }
    newsquare = getnext(solution[i], row, column)
    // console.log(` newsquare: ${newsquare}`);

    row = newsquare[0]
    column = newsquare[1]
  }


  // size = 8 * n
  // oldtotal = total
  // total -= size
  // console.log(`${n}, ${size}, ${total}`);
  // if (total < 0) {
  //   matched = true;
  //   console.log(`${n} ${size} ${total} ${oldtotal}`);
  // }
  // n = n+1
  // if (i > 2) {
  //   matched = true
  // }
}

function getnext(grid, row, col) {
  if (grid[row] && grid[row][col + 1] == 0) return [row, col + 1]
  if (grid[row - 1] && grid[row - 1][col] == 0) return [row - 1, col]
  if (grid[row] && grid[row][col - 1] == 0) return [row, col - 1]
  if (grid[row + 1] && grid[row + 1][col] == 0) return [row + 1, col]
  return [row, col]
  }

function addadjacents(grid, row, col) {
  let sum = 0
  let size = grid.length
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      if (typeof grid[row + i] != "undefined") {
      if (!(i == 0 && j == 0) && typeof grid[row + i][col + j] != "undefined") {
        sum += grid[row + i][col + j]
      }
    }
    }
  }
  return sum
}

console.log("done");
