const input = "R5, R4, R2, L3, R1, R1, L4, L5, R3, L1, L1, R4, L2, R1, R4, R4, L2, L2, R4, L4, R1, R3, L3, L1, L2, R1, R5, L5, L1, L1, R3, R5, L1, R4, L5, R5, R1, L185, R4, L1, R51, R3, L2, R78, R1, L4, R188, R1, L5, R5, R2, R3, L5, R3, R4, L1, R2, R2, L4, L4, L5, R5, R4, L4, R2, L5, R2, L1, L4, R4, L4, R2, L3, L4, R2, L3, R3, R2, L2, L3, R4, R3, R1, L4, L2, L5, R4, R4, L1, R1, L5, L1, R3, R1, L2, R1, R1, R3, L4, L1, L3, R2, R4, R2, L2, R1, L5, R3, L3, R3, L1, R4, L3, L3, R4, L2, L1, L3, R2, R3, L2, L1, R4, L3, L5, L2, L4, R1, L4, L4, R3, R5, L4, L1, L1, R4, L2, R5, R1, R1, R2, R1, R5, L1, L3, L5, R2"

let inarr = input.split(", ").map(n => {return { dir: n[0], num: Number(n.substring(1))}})

var visited = [[0,0]]

// let test = [{dir: "R", num: 1},
//             {dir: "R", num: 1},
//             {dir: "R", num: 2},
//             {dir: "R", num: 2},
//             {dir: "R", num: 2},
//             {dir: "R", num: 2}
//           ]

// let test = [{dir: "R", num: 6}]

let test = inarr
// let test = [{dir: "R", num: 2}]
//
let taxi = test.reduce((taxi, step, i, test) => {return applyStep(taxi, step)},
                                                  {coords: [0,0], facing: [1,0]})


// console.log(`where you been? ${visited}`);
// console.log(`output: ${taxi.coords}`);
// console.log(`taxi distance is: ${Math.abs(taxi.coords[0]) + Math.abs(taxi.coords[1])}`);
// console.log(inarr);

// console.log(turnright(turnleft([0,-1])));

function applyStep(curr, step) {
  // console.log(`facing ${curr.facing}`);
  const newDir = step.dir == "R" ? turnright(curr.facing) : turnleft(curr.facing)
  // console.log(`turning ${step.dir} to face ${newDir}`);
  // console.log(`moving ${scalarMult(newDir,step.num)}`);
  for (var i = 1; i <= step.num; i++) {
    let thispos = addVecs(curr.coords, scalarMult(newDir,i))
    // console.log(`visiting ${thispos}`)
    console.log(visited);
    for (entry of visited) {
      // console.log(`entry is ${entry} and thispos is ${thispos}`);
      if (samePos(entry,thispos)) {
        document.write(`winner, winner, chicken dinner at ${thispos}`);
      }
    }
    visited = visited.concat([thispos])
  }
  const newCoords = addVecs(curr.coords, scalarMult(newDir,step.num))


  // console.log(`now at ${newCoords}`);
  return {coords: newCoords, facing: newDir};
  // return curr;
}

function samePos(a,b) {
  return (a[0] == b[0]) && (a[1] == b[1])
}

function scalarMult(vec, scalar) {
  return vec.map(n => n * scalar)
}

function addVecs(vec1, vec2) {
  return [vec1[0]+vec2[0], vec1[1] + vec2[1]]
}

function turnright(dir) {
  return [(dir[0] * 0) + (dir[1] * -1), (dir[0] * 1) + (dir[1] * 0)]
}

function turnleft(dir) {
  return [(dir[0] * 0) + (dir[1] * 1), (dir[0] * -1) + (dir[1] * 0)]
}
