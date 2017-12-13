"use strict";

console.log("yo");

let input = `Rudolph can fly 22 km/s for 8 seconds, but then must rest for 165 seconds.
Cupid can fly 8 km/s for 17 seconds, but then must rest for 114 seconds.
Prancer can fly 18 km/s for 6 seconds, but then must rest for 103 seconds.
Donner can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.
Dasher can fly 11 km/s for 12 seconds, but then must rest for 125 seconds.
Comet can fly 21 km/s for 6 seconds, but then must rest for 121 seconds.
Blitzen can fly 18 km/s for 3 seconds, but then must rest for 50 seconds.
Vixen can fly 20 km/s for 4 seconds, but then must rest for 75 seconds.
Dancer can fly 7 km/s for 20 seconds, but then must rest for 119 seconds.`

let arr = input.trim().split('\n').map(n => n.split(' '))

let deer = {}


for (var i = 0; i < arr.length; i++) {
  deer[arr[i][0]] = {}
  deer[arr[i][0]].speed = arr[i][3]
  deer[arr[i][0]].stamina = arr[i][6]
  deer[arr[i][0]].rest = arr[i][arr[i].length - 2]
  deer[arr[i][0]].flying = true
  deer[arr[i][0]].flyingfor = 0
  deer[arr[i][0]].restingfor = 0
  deer[arr[i][0]].position = 0
  deer[arr[i][0]].points = 0
}

// console.log(deer);
let leader, furthest = 0

for (var time = 1; time < 2504; time++) {
  for (var d in deer) {
    if (deer.hasOwnProperty(d)) {
      if (deer[d].flying) {
        deer[d].position += Number(deer[d].speed)
        if (deer[d].position > furthest) {
          furthest = deer[d].position
          leader = d
        }
        deer[d].flyingfor += 1
        if (deer[d].flyingfor == deer[d].stamina) {
          deer[d].flying = false
          deer[d].flyingfor = 0
        }
      } else {
        deer[d].restingfor += 1
        if (deer[d].restingfor == deer[d].rest) {
          deer[d].flying = true
          deer[d].restingfor = 0
        }
      }
    }
  }

deer[leader].points += 1

}

console.log(`we've been going for ${time - 1} seconds`);
for (var d in deer) {
  if (deer.hasOwnProperty(d)) {
    console.log(`${d} has gone ${deer[d].position}, has ${deer[d].points} points and is ${deer[d].flying ? 'flying' : 'resting'}`);
  }
}
