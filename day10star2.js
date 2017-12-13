console.log("yo");

input = `183,0,31,146,254,240,223,150,2,206,161,1,255,232,199,88`

arr = input.split('')

// console.log(arr);

input = arr.map(n => n.charCodeAt(0))
input = input.concat([17, 31, 73, 47, 23])

console.log(input);


// input = [3,4,1,5]

list = []

for (var i = 0; i < 256; i++) {
  list.push(i)
}

// console.log(list[255]);

pos = 0
skip = 0
revarr = []
remarr = []

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
// console.log(list[0] * list[1]);
console.log(list)
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

console.log(sparse);

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
