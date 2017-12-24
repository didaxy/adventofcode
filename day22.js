"use sctrict";
console.log("yo")

const fs = require('fs');

fs.readFile('input.day22.txt','utf8', (err, input) => {
  const target = 10000000
  let grid = input.trim().split('\n').map(n => n.split(''))
  // console.log(grid)
  let pos = [Math.floor(grid.length / 2), Math.floor(grid[0].length / 2)]
  let dir = [-1, 0]
  let infected = false
  let infections = 0
  let counter = 0
  do {
      // console.log(`pos: ${pos}, facing: ${dir} found: ${grid[pos[0]][pos[1]]}`);
      // infected = grid[pos[0]][pos[1]] == "#"
      switch (grid[pos[0]][pos[1]]) {
        case ".":
          dir = turnLeft(dir)
          grid[pos[0]][pos[1]] = "w"
          break;
        case "w":
          grid[pos[0]][pos[1]] = "#"
          infections++
          break;
        case "#":
          dir = turnRight(dir)
          grid[pos[0]][pos[1]] = "f"
          break;
        case "f":
          dir = reverse(dir)
          grid[pos[0]][pos[1]] = "."
          break;
        default:

      }

      // if (infected) {
      //   dir = turnRight(dir)
      //   //disinfect
      //   // console.log(`infected: turning right and disinfecting`);
      //   grid[pos[0]][pos[1]] = "."
      // } elseif {
      //   dir = turnLeft(dir)
      //   //infect
      //   // console.log(`not infected: turning left and infecting`);
      //   grid[pos[0]][pos[1]] = "#"
      //   infections++
      // }

      pos = [pos[0] + dir[0], pos[1] + dir[1]]
      if (pos[0] < 0) {
        addStartRow()
        pos[0] = 0
      }
      if (pos[0] > grid.length - 1) {
        addEndRow()
        pos[0] = grid.length - 1
      }
      if (pos[1] < 0) {
        addStartCol()
        pos[1] = 0
      }
      if (pos[1] > grid[0].length - 1) {
        addEndCol()
        pos[1] = grid[0].length - 1
      }
      counter++
      if (counter >= target) break;
      // console.log(grid);
  } while (true)

  console.log(grid);

function reverse(dir) {
  return [0 - dir[0], 0 - dir[1]]
}

function turnLeft(dir) {
  //-1 0 -> 0 -1 -> 1 0 -> 0 1
  if (dir[0] == 0) {
    dir = [0 - dir[1], 0]
  } else {
    dir = [0, dir[0]]
  }
  return dir
}

function turnRight(dir) {
  //-1 0 -> 0 1 -> 1 0 -> 0 -1
  if (dir[0] == 0) {
    dir = [dir[1], 0]
  } else {
    dir = [0, 0 - dir[0]]
  }
  return dir
}

function addStartRow() {
  let row = Array(grid[0].length).fill('.')
  grid.unshift(row)
  // console.log(grid);
}

function addEndRow() {
  let row = Array(grid[0].length).fill('.')
  grid.push(row)
  // console.log(grid);
}

function addStartCol() {
  grid.map(n => n.unshift('.'))
  // console.log(grid);
}

function addEndCol() {
  grid.map(n => n.push('.'))
  // console.log(grid);
}

console.log(`did ${counter} iterations, caused ${infections} infections`);

// console.log(grid);

// addStartRow()
// addStartRow()
// addStartRow()
// addEndRow()
// addEndRow()

// addStartCol()
// addStartCol()


})
