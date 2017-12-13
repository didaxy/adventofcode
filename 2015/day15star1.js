"use strict";

console.log("yo");

let input = `Sugar: capacity 3, durability 0, flavor 0, texture -3, calories 2
Sprinkles: capacity -3, durability 3, flavor 0, texture 0, calories 9
Candy: capacity -1, durability 0, flavor 4, texture 0, calories 1
Chocolate: capacity 0, durability 0, flavor -2, texture 2, calories 8
`

let arr = input.trim().split('\n').map(n => {
  let temp = n.split(' ')
  // let obj = {}
  // obj[temp[0]] =
  return [temp[2].slice(0,-1), temp[4].slice(0,-1), temp[6].slice(0,-1), temp[8].slice(0,-1), temp[10]]
})

console.log(arr);

let totalspoons = 100

let i,j,k,l,score
let cap, dur, fla, tex, calories
let highest = 0

for (i = 0; i <= totalspoons; i++) {
  // console.log(`${i} spoons of sugar`);
  for (j = 0; j < totalspoons - i; j++) {
    // console.log(`${j} spoons of sprinkles`);
    for (k = 0; k < totalspoons - i - j; k++) {
      // console.log(`${k} spoons of candy`);
      l =  totalspoons - i - j -k
        // console.log(`${l} spoons of chocolate`);
        console.log(`${i} sugar, ${j} sprinkles, ${k} candy, ${l} chocolate`);
        cap = (i * arr[0][0]) + (j * arr[1][0]) + (k * arr[2][0]) + (l * arr[3][0])
        dur = (i * arr[0][1]) + (j * arr[1][1]) + (k * arr[2][1]) + (l * arr[3][1])
        fla = (i * arr[0][2]) + (j * arr[1][2]) + (k * arr[2][2]) + (l * arr[3][2])
        tex = (i * arr[0][3]) + (j * arr[1][3]) + (k * arr[2][3]) + (l * arr[3][3])
        score = cap * dur * fla * tex
        calories = (i * arr[0][4]) + (j * arr[1][4]) + (k * arr[2][4]) + (l * arr[3][4])
        console.log(`${cap}, ${dur}, ${fla}, ${tex}`);
        console.log(score);
        if (cap < 0 || dur < 0 || fla < 0 || tex < 0) score = 0
        console.log(`scores: ${score}`);
        if (calories == 500 && score > highest) highest = score
    }
  }
}

console.log(`the highest score I found was: ${highest}`);
