const fs = require('fs');

fs.readFile('dummy.day19.txt','utf8', (err, input) => {
  if (err) console.log("no file");
  let grid = input.split('\n')
  console.log(grid);

  let start = grid[0].indexOf('|')
  console.log(`star pos ${start}`);
  let pos = [0,start]
  let dir = [1,0]
  let here, lookahead, lookfurther
  let letters = []
  let count = 0

  do {
    console.log(`pos is ${pos}, dir is ${dir}`);

  if (pos[0] < 0 || pos[0] > grid.length || pos[1] < 0 || pos[1] > grid[0].length) break;

  here = grid[pos[0]][pos[1]]
  lookahead = grid[pos[0] + dir[0]][pos[1] + dir[1]]
  // let lookahead = grid[1][0]
  if (here.match(/[A-Z]/)) {
    // if (letters.includes(here)) {
    //   console.log("BEEN THERE DONE THAT");
    //   break;
    // } else {
    //   letters.push(here)
    // }
    letters.push(here)
  }
  console.log(`here is ${here} and next is ${lookahead}`);

  if (lookahead && ((dir[1] == 0 && lookahead == "|")
        || dir[0] == 0 && lookahead == "-"
        || lookahead == "+"
        || lookahead.match(/[A-Z]/))) {
          //move forwards
          // console.log("go");
          pos = [pos[0] + dir[0], pos[1] + dir[1]]
        } else {
          if (grid[pos[0] + (2 * dir[0])]) lookfurther = grid[pos[0] + (2 * dir[0])][pos[1] + (2 * dir[1])]
          console.log(`looking further sees ${lookfurther}`);
          if (lookfurther && ((dir[1] == 0 && (lookfurther == "|" || lookfurther.match(/[A-Z]/) || lookfurther == "+"))
               || (dir[0] == 0 && (lookfurther == "-" || lookfurther.match(/[A-Z]/) || lookfurther == "+")))) {
                 //move anyway
                 // console.log(`looked further and found ${lookfurther}`);
                 // console.log("go anyway");
                 pos = [pos[0] + dir[0], pos[1] + dir[1]]
               } else {
                 //turn
                 console.log("turns");
                 dir = [dir[1], dir[0]]
                 console.log(dir);
                 console.log(`finds ${grid[pos[0] + dir[0]][pos[1] + dir[1]]}`);
                 if ((dir[0] == 0 && (grid[pos[0] + dir[0]][pos[1] + dir[1]] == "|"
                                      || typeof grid[pos[0] + dir[0]][pos[1] + dir[1]] == "undefined"
                                      || grid[pos[0] + dir[0]][pos[1] + dir[1]] == " "))
                  || (dir[1] == 0 && (grid[pos[0] + dir[0]][pos[1] + dir[1]] == "-")
                                      || typeof grid[pos[0] + dir[0]][pos[1] + dir[1]] == "undefined"
                                      || grid[pos[0] + dir[0]][pos[1] + dir[1]] == " ")) {
                        //turn the other way
                        console.log(`other way`);
                        dir = [0 - dir[0], 0 - dir[1]]
                      }
               }


        }
 count++
 // console.log(count);
 // if (count > 50) break;
 lookahed = null
 lookfurther = null
 console.log(`${count} ${letters}`);
} while (true)

console.log(letters);

console.log(letters.join(''));


  // do {
  //   if (here.match())
  // }
})
