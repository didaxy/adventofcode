console.log("yo");

input = [183,0,31,146,254,240,223,150,2,206,161,1,255,232,199,88]



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

console.log(list);
for (var i = 0; i < input.length; i++) {
  console.log(`pos is ${pos}`);
  thislen = input[i]
  newarray = list.slice(0)
  for (var j = 0; j < thislen; j++) {
    from = (j + pos) % 256
    to = ((pos + thislen - 1 - j)) % 256
    console.log(`from ${from} to ${to}`);
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
  console.log(skip);
}

console.log(list[0] * list[1]);
