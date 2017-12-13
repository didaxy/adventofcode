console.log("yo");

//look and see!

let input = `3113322113`
// input = `3`

let steps = [input]


for (var i = 0; i < 50; i++) {
  // steps.push(lookandsee(steps[i]))
  input = lookandsee(input)
}

console.log(input.length);

// console.log(steps[39]);

function lookandsee(input) {
  let arr = input.match(/(\d)\1*/g)

  // console.log(arr);

  let nextarr = arr.map(n => `${n.length}${n[0]}`)

  // console.log(nextarr);

  let nextstr = nextarr.join('')

  // console.log(nextstr);

  return nextstr
}
