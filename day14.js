console.log("day 14 baby");

let input = `hfdlxzhv`

// let arr = input.split('\n')
//
// console.log(`arr is ${arr}`);
//
// let arr2 = arr.map(n => n.trim()
//                          .split(' ')
//                          .map(m => m.trim())
//                        ).map(k => [k[0], k[1], k[2]])


// console.log(`arr2 is ${arr2}`);

let hash

for (var i = 0; i < 128; i++) {
  hash = input + "-" + i.toString()
  console.log(hash);
}

list = []

for (var i = 0; i < 256; i++) {
  list.push(i)
}

console.log(getHash(input + "-" + "0"))

// console.log(list[255]);
function getHash(input) {

let pos = 0
let skip = 0
let revarr = []
let remarr = []

for (var m = 0; m < 64; m++) {

  // console.log(list);
  for (var i = 0; i < input.length; i++) {
    // console.log(`pos is ${pos}`);
    thislen = input[i]
    newarray = list.slice(0)
    for (var j = 0; j < thislen; j++) {
      from = (j + pos) % 256
      to = ((pos + thislen - 1 - j)) % 256
      // console.log(`from ${from} to ${to}`);
      newarray[from] = list[to]
    }
    // for (var k = 0; k < 5 - thislen; k++) {
    //   remarr.push(list[(k + thislen + pos) % 5])
    // }
    // reversed = revarr.reverse()

    // list = reversed.concat(remarr)
    // revarr = []
    // remarr = []
    list = newarray
    pos = pos + thislen + skip
    skip += 1
    // console.log(skip);
  }
}

// console.log(list)
sparse = []
tot = 0
for (var mm = 0; mm < 16; mm++) {
  subtot = list[16 * mm]
  for (var nn = 1; nn < 16; nn++) {
    elt = (16 * mm) + nn
    subtot = subtot ^ list[elt]
    subtot
  }
  sparse.push(subtot)
}

outchars = []

// sparse = [76]

for (elt of sparse) {
  console.log(`elt is ${elt}`);
  charcode1 = Math.floor(elt / 16)
  charcode2 = elt % 16
  char1 = charcode1.toString(16)
  char2 = charcode2.toString(16)
  // console.log(`${charcode1}, ${char1}, ${charcode2}, ${char2}`);
  outchars.push(char1)
  outchars.push(char2)
}

console.log(outchars);

final = outchars.join('')

console.log(final);

return final
}
