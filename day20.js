const fs = require('fs');
// let iters = 10
let step = 100
let steps = 1000

fs.readFile('input.day20.txt','utf8', (err, input) => {
  if (err) console.log("no file");
  let grid = input.split('\n').map(n => n.split(','))
  let particles = grid.map(n => [[Number(n[0].trim().slice(3)), Number(n[1]), Number(n[2].trim().slice(0,-1))],
                            [Number(n[3].trim().slice(3)), Number(n[4]), Number(n[5].trim().slice(0,-1))],
                            [Number(n[6].trim().slice(3)), Number(n[7]), Number(n[8].trim().slice(0,-1))]])
  // console.log(grid);
  // console.log(particles);

  //wrap to iterate
  for (let outer = 0; outer < steps; outer++) {
    for (let inner = 0; inner < step; inner++) {
      for (let index = 0; index < particles.length; index++) {
        particles[index] = updateLine(particles[index])
      }
    }
    //inner comes back
    let distances = particles.map(n => Math.abs(n[0][0]) + Math.abs(n[0][1]) + Math.abs(n[0][2]))
    let min = Infinity
    let windex = 0
    // console.log(distances);
    // console.log(particles);
    
    for (let index = 0; index < distances.length; index++) {
      // console.log(distances[index]);
      
      if (distances[index] < min) {
        min = distances[index]
        windex = index
      }      
    }
    console.log(windex);
    
  }
  // console.log(particles);
  
})

function updateLine(arr) {
  let acc = arr[2]
  let vel = arr[1]
  let pos = arr[0]
  
  let newVel = addVecs(vel, acc)
  let newPos = addVecs(pos, newVel)

  return [newPos, newVel, acc]
}


function addVecs(vec1, vec2) {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]]
}