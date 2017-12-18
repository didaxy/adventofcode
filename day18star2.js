const fs = require('fs');

let registers = [{'p': 0},{'p': 1}]
// let registersb = {'p': 1}

let queues = [[],[]]

let count = 0
let tally = 0

let sound
let sounds = []

let posa = 0
let posb = 0, arg1, arg2

let instr, bound

let stopped = [false, false]

fs.readFile('input.day18.txt','utf8', (err, input) => {
  if (err) console.log("no file");
  instr = input.trim().split('\n')
                 .map(n => n.trim().split(/\s/))
  bound = instr.length
  do {
    if (posa > bound || posa < 0) stopped[0] = true
    if (posb > bound || posb < 0) stopped[1] = true
    console.log(`---------------`);
    console.log(stopped);
    console.log(`---------------`);
    console.log(`posa: ${posa}, posb: ${posb}`);
    console.log(queues);
    console.log(`---------------`);

    if (stopped[0] && stopped[1])
    {
      console.log(tally);
      break;
    }
      posa = step(posa, 0)
      posb = step(posb, 1)

      if (stopped[0] && stopped[1]) break;

    count++
    // if (count > 200) break;
    //do loop
    // console.log(count);
  } while (true)

  console.log(`finished with ${tally}`);

// console.log(registers)
// console.log(registersb)


})


function step(pos, ind) {
  console.log(`-----------------`);
  console.log(`count is ${count}`);
  console.log(`-----------------`);
  console.log(`index is ${ind}`);
  console.log(`-----------------`);
  console.log(`registers:`);
  console.log(registers);

  // console.log(`pos ${pos}`);
  // console.log(`${instr[pos]}, ${instr.length}`);
  arg1 = instr[pos][1]
  arg2 = instr[pos][2]
  // arg1 = Number(instr[pos][1])
  // arg2 = Number(instr[pos][2])
  // console.log(`index is ${ind}, arguments are ${arg1}, ${arg2}`);
  if (isNaN(arg1)) {
    if (!registers[ind][arg1]) registers[ind][arg1] = 0
    arg1 = registers[ind][arg1]
  }
  if (isNaN(arg2)) {
    if (!registers[ind][arg2]) registers[ind][arg2] = 0
    arg2 = registers[ind][arg2]
  }
  arg1 = Number(arg1)
  arg2 = Number(arg2)
  console.log(`instruction is ${instr[pos][0]}`);
  console.log(`...arguments are ${arg1}, ${arg2}`);


  // console.log(`${ind}, ${instr[pos][0]}, ${arg1}, ${instr[pos][2]}`);
  // console.log(count);
  // console.log(queues);
  // console.log(`arg1 ${arg1}, arg2 ${arg2}`);
  switch (instr[pos][0]) {
    case "snd":
      // sounds.push(arg1)
      // sound = arg1
      queues[1 - ind].push(arg1)
      if (ind == 1) {
        tally++
        console.log(`---------------`);
        console.log(`tally ${tally}`);
        console.log(`---------------`);

      }
      pos++
      // console.log('snd');
      break;
    case "set":
      registers[ind][instr[pos][1]] = arg2;
      pos++;
      break;
    case "add":
      registers[ind][instr[pos][1]] += arg2
      pos++
      break;
    case "mul":


      registers[ind][instr[pos][1]] = registers[ind][instr[pos][1]] * arg2

      pos++
      break;
    case "mod":
      registers[ind][instr[pos][1]] = registers[ind][instr[pos][1]] % arg2
      pos++
      break;
    case "rcv":
        if (queues[ind].length > 0) {
          registers[ind][instr[pos][1]] = queues[ind].shift()
          pos++
          stopped[ind] = false
        } else {
          stopped[ind] = true
        }
      break;
    case "jgz":
      if (arg1 > 0) {
        pos = pos + arg2
      } else {
        pos++
      }
      break;
  default:
  }
  return pos
}
